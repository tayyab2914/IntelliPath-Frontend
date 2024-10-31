
import React, { useEffect, useState } from "react";
import NavbarMain from "../../../components/Navbar/NavbarMain";
import Footer from "../../../components/Footer/Footer";
import TribeHeader from "./TribeHeader";
import { TRIBE_EXPLORE_DATA } from "../../../data/TribesData";
import { Col, Row, Select, Pagination } from "antd";
import TribeCard from "./TribeCard";
import "../styles/TribeExplore.css";
import { AVAILABLE_GOALS } from "../../../utils/GlobalSettings";

const { Option } = Select;

const JoinedTribes = () => {
  const [filteredTribes, setFilteredTribes] = useState(TRIBE_EXPLORE_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    filterTribes(); 
  }, [selectedCategory]);

  const filterTribes = () => {
    if (selectedCategory) {
      const filtered = TRIBE_EXPLORE_DATA.filter(
        (tribe) => tribe.tribe_category === selectedCategory
      );
      setFilteredTribes(filtered);
    } else {
      setFilteredTribes(TRIBE_EXPLORE_DATA);
    }
    setCurrentPage(1);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedTribes = filteredTribes.slice(startIndex, endIndex);

  return (
    <div>
        <div className="tribe-explore-main">
          <TribeHeader type={"Joined"} />
            <Select className="tribe-explore-select" defaultValue="Select Category" style={{ width: 200, marginBottom: 20 }} onChange={handleCategoryChange} size="medium" >
              <Option value={null}>All</Option>
              {AVAILABLE_GOALS.map((goal) => ( <Option value={goal}>{goal}</Option> ))}
            </Select>
          <Row gutter={[15, 15]} className="tribe-explore-row">
            {displayedTribes.map((tribe) => ( <TribeCard tribeData={tribe}  btnText={"View Tribe"}/> ))}
          </Row>
          
          <Pagination current={currentPage} pageSize={pageSize} total={filteredTribes.length} onChange={handlePageChange} showSizeChanger={false} style={{ marginTop: 20 }}/>
        </div>
      </div>
  );
};

export default JoinedTribes;
