import React, { useEffect, useState } from "react";
import TribeHeader from "./TribeHeader";
import { Col, Row, Select, Pagination, Spin, Divider } from "antd";
import TribeCard from "./TribeCard";
import "../styles/TribeExplore.css";
import { AVAILABLE_GOALS } from "../../../utils/GlobalSettings";
import { GET_PAGINATION_DETAILS } from "../../../utils/ReusableFunctionalities";
import { API_GET_JOINED_TRIBES } from "../../../apis/TribeApis";
import { useSelector } from "react-redux";

const { Option } = Select;

const JoinedTribes = () => {
  const [AllTribes, setAllTribes] = useState([]);
  const [adminTribes, setAdminTribes] = useState([]);
  const [otherTribes, setOtherTribes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(17);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { token, rerender_tribe_page } = useSelector((state) => state.authToken);
  const [ShowSpinner, setShowSpinner] = useState(false);

  const fetchJoinedTribes = async () => {
    const response = await API_GET_JOINED_TRIBES(token, setShowSpinner);

    setAllTribes(response);
    const adminTribes = response.filter((tribe) => tribe.is_admin);
    const otherTribes = response.filter((tribe) => !tribe.is_admin);

    setAdminTribes(adminTribes);
    setOtherTribes(otherTribes);
  };

  useEffect(() => {
    fetchJoinedTribes();
  }, [token, rerender_tribe_page]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    filterTribes();
  }, [selectedCategory, AllTribes]);


  const filterTribes = () => {
    const filterByCategory = (tribes) => selectedCategory ? tribes.filter((tribe) => tribe.category === selectedCategory) : tribes;
    setAdminTribes(filterByCategory(adminTribes));
    setOtherTribes(filterByCategory(otherTribes));
    setCurrentPage(1);
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {ShowSpinner && <Spin fullscreen />}
      <div className="tribe-explore-main">
        <TribeHeader type={"Joined"} />
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
        <Row gutter={[15, 15]} className="tribe-explore-row">
            {adminTribes.length>0 && <Col xs={24}> <p className="tribe-explore-heading">Administered Tribes</p> </Col>}
            {adminTribes.map((tribe) => (
                <TribeCard key={tribe.id} tribeData={tribe} btnText={"View Tribe"} />
            ))}
        </Row>
        {adminTribes.length > 0 && otherTribes.length > 0 && <Divider />}
        <Row gutter={[15, 15]} className="tribe-explore-row">
            {otherTribes.length>0 && <Col xs={24}> <p className="tribe-explore-heading">Other Joined Tribes</p> </Col>}
            {otherTribes.map((tribe) => (
                <TribeCard key={tribe.id} tribeData={tribe} btnText={"View Tribe"} />
            ))}
        </Row>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={adminTribes.length + otherTribes.length}
          onChange={handlePagination}
          showSizeChanger={false}
          style={{ marginTop: 20 }}
        />
      </div>
    </div>
  );
};

export default JoinedTribes;
