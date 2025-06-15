import React, { useEffect, useState } from "react";
import TribeHeader from "./TribeHeader";
import { Col, Row, Select, Pagination, Spin, Divider, Input } from "antd";
import TribeCard from "./TribeCard";
import "../styles/TribeExplore.css";
import { AVAILABLE_GOALS } from "../../../utils/GlobalSettings";
import { GET_PAGINATION_DETAILS } from "../../../utils/ReusableFunctionalities";
import { API_GET_JOINED_TRIBES } from "../../../apis/TribeApis";
import { useSelector } from "react-redux";
import CustomSpinner from "../../../components/Loader/CustomSpinner";

const { Option } = Select;

const JoinedTribes = () => {
  const [AllTribes, setAllTribes] = useState([]);
  const [adminTribes, setAdminTribes] = useState([]);
  const [otherTribes, setOtherTribes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(17);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchText, setSearchText] = useState("");
  const { token, rerender_tribe_page } = useSelector((state) => state.authToken);
  const [ShowSpinner, setShowSpinner] = useState(false);

  const fetchJoinedTribes = async () => {
    const response = await API_GET_JOINED_TRIBES(token, setShowSpinner);

    setAllTribes(response);
    const adminTribes = response?.filter((tribe) => tribe.is_admin);
    const otherTribes = response?.filter((tribe) => !tribe.is_admin);

    setAdminTribes(adminTribes);
    setOtherTribes(otherTribes);
  };

  useEffect(() => {
    fetchJoinedTribes();
  }, [token, rerender_tribe_page]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    filterTribes();
  }, [selectedCategory, AllTribes, searchText]);

  const filterTribes = () => {
    const filterByCategory = (tribes) =>
      selectedCategory ? tribes.filter((tribe) => tribe.category === selectedCategory) : tribes;
  
    const filterBySearch = (tribes) =>
      searchText ? tribes.filter((tribe) => 
        tribe.name?.toLowerCase().includes(searchText.toLowerCase())
      ) : tribes;

    // Use AllTribes to derive the filtered lists
    const adminFiltered = filterBySearch(filterByCategory(AllTribes?.filter((tribe) => tribe.is_admin)));
    const otherFiltered = filterBySearch(filterByCategory(AllTribes?.filter((tribe) => !tribe.is_admin)));
  
    setAdminTribes(adminFiltered);
    setOtherTribes(otherFiltered);
    setCurrentPage(1);
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  return (
    <div>
      
      <div className="tribe-explore-main">
        <TribeHeader type={"Joined"} />
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
            onChange={(value) => setSelectedCategory(value)}
            size="medium"
          >
            <Option value={null}>All</Option>
            {AVAILABLE_GOALS.map((goal) => (
              <Option key={goal} value={goal}>
                {goal}
              </Option>
            ))}
          </Select>
          
        </div>
        {ShowSpinner ? 
      <div className="tribe-explore-spinner-wrapper">
        <CustomSpinner/>
      </div>:
        <Row gutter={[15, 15]} className="tribe-explore-row">
            {adminTribes?.length>0 && <Col xs={24}> <p className="tribe-explore-heading">Administered Tribes</p> </Col>}
            {adminTribes?.map((tribe) => (
                <TribeCard key={tribe.id} tribeData={tribe} btnText={"View Tribe"} />
            ))}
        </Row>}
        {adminTribes?.length > 0 && otherTribes?.length > 0 && <Divider />}
        <Row gutter={[15, 15]} className="tribe-explore-row">
            {otherTribes?.length>0 && <Col xs={24}> <p className="tribe-explore-heading">Other Joined Tribes</p> </Col>}
            {otherTribes?.map((tribe) => (
                <TribeCard key={tribe.id} tribeData={tribe} btnText={"View Tribe"} />
            ))}
        </Row>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={adminTribes?.length + otherTribes?.length}
          onChange={handlePagination}
          showSizeChanger={false}
          style={{ marginTop: 20 }}
        />
      </div>
    </div>
  );
};

export default JoinedTribes;
