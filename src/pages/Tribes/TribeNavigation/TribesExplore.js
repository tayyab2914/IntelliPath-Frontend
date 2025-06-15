import React, { useEffect, useState } from "react";
import TribeHeader from "./TribeHeader";
import { Row, Select, Pagination, Empty, Input } from "antd";
import TribeCard from "./TribeCard";
import "../styles/TribeExplore.css";
import { AVAILABLE_GOALS } from "../../../utils/GlobalSettings";
import { GET_PAGINATION_DETAILS } from "../../../utils/ReusableFunctionalities";
import { API_GET_ALL_TRIBES } from "../../../apis/TribeApis";
import { useSelector } from "react-redux";
import NavbarMain from "../../../components/Navbar/NavbarMain";
import Footer from "../../../components/Footer/Footer";
import CustomSpinner from "../../../components/Loader/CustomSpinner";

const { Option } = Select;

const TribesExplore = () => {
  const [AllTribes, setAllTribes] = useState([]);
  const [filteredTribes, setFilteredTribes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(17);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchText, setSearchText] = useState("");
  const { token, rerender_tribe_page } = useSelector((state) => state.authToken);
  const [ShowSpinner, setShowSpinner] = useState(false);
  const [displayedTribes, setDisplayedTribes] = useState([]);
  const fetchJoinedTribes = async () => {

    const response = await API_GET_ALL_TRIBES(token, setShowSpinner);

    setAllTribes(response);
    setFilteredTribes(response);
  };

  useEffect(() => {
    fetchJoinedTribes();
  }, [token, rerender_tribe_page]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    filterTribes();
  }, [selectedCategory, AllTribes, searchText]);

  useEffect(() => {
    const displayed = GET_PAGINATION_DETAILS(currentPage, pageSize, filteredTribes);
    setDisplayedTribes(displayed);
  }, [currentPage, pageSize, filteredTribes]);

  const filterTribes = () => {
    let filtered = AllTribes;
    
    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((tribe) => tribe.category === selectedCategory);
    }
    
    // Filter by search text
    if (searchText) {
      filtered = filtered.filter((tribe) => 
        tribe.name?.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    
    setFilteredTribes(filtered);
    setCurrentPage(1);
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  return (
    <div>
      <NavbarMain />
      <div className="generic-container">
      {/* {ShowSpinner && <Spin fullscreen/>} */}
        <div className="tribe-explore-main">
          <TribeHeader type={"Explore"} />
          <div className="tribe-filters">
            <Input.Search
              placeholder="Search tribes..."
              allowClear
              onSearch={handleSearch}
              onChange={(e) => handleSearch(e.target.value)}
              style={{ width: "100%", marginBottom: 20 }}
            />
            <Select 
              className="tribe-explore-select" 
              defaultValue="Select Category"  
              onChange={(value)=>setSelectedCategory(value)} 
              size="medium"
            >
              <Option value={null}>All</Option>
              {AVAILABLE_GOALS.map((goal) => ( 
                <Option key={goal} value={goal}>{goal}</Option> 
              ))}
            </Select>
          </div>
          {ShowSpinner ? 
      <div className="tribe-explore-spinner-wrapper">
        <CustomSpinner/>
      </div>:
          <Row gutter={[15, 15]} className="tribe-explore-row">
            {displayedTribes?.length>0  ? displayedTribes.map((tribe) => ( <TribeCard isInTribeExplorePage={true} tribeData={tribe} btnText={"Join Tribe"}/> ))
            :
            <div className="tribe-row-empty">
                <Empty description="No Tribes to Show."/>
            </div>}
            
          </Row>}
          <Pagination current={currentPage} pageSize={pageSize} total={filteredTribes?.length} onChange={(page)=>setCurrentPage(page)} showSizeChanger={false} style={{ marginTop: 20 }}/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TribesExplore;
