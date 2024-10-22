import React, { useState } from "react";
import { Table, Row, Col, Select } from "antd";  // Imported Select
import NavbarMain from "../../components/Navbar/NavbarMain";
import TitleMain from "../../components/Title/TitleMain";
import "./styles/Leaderboard.css";
import Footer from "../../components/Footer/Footer";
import useWindowWidth from "../../hooks/useWindowWidth";
import { leaderboardColumns } from "./LeaderboardColumns";
import { dataSource, singleUser } from "./LeaderboardFunctionality";
import { useNavigate } from "react-router-dom";
import { AVAILABLE_GOALS } from "../../utils/GlobalSettings";

const { Option } = Select;  // Extracted Option from Select

const LeaderboardMain = () => {
  const windowWidth = useWindowWidth();
  const navigate = useNavigate();
  const columns = leaderboardColumns(windowWidth);

  const [selectedCategory, setSelectedCategory] = useState("Frontend Developer");

  const handleRowClick = (record) => {
    navigate(`/user/${record.user_id}`);
  };

  const handleSelectChange = (value) => {
    setSelectedCategory(value);
    console.log("Selected category:", value);
  };

  return (
    <>
      <NavbarMain />
      <TitleMain title="Leaderboard" description="Showcasing top achievers and their accomplishments!" />

      <div className="generic-container">
        <div className="leaderboard-select">
          <Select  defaultValue="Frontend Developer"  onChange={handleSelectChange} >
            {AVAILABLE_GOALS?.map((item)=><Option value={item}>{item}</Option>)}
          </Select>
        </div>

        <Table
          dataSource={singleUser}
          columns={columns}
          pagination={false}
          className="leaderboard-table-single"
          showHeader={false}
        />
        <p className="leaderboard-title">Goal : {selectedCategory}</p>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 15, position: ["bottomRight"] }}
          rowKey="position"
          className="leaderboard-table"
          onRow={(record) => ({ onClick: () => handleRowClick(record), })}
        />
      </div>
      <Footer />
    </>
  );
};

export default LeaderboardMain;
