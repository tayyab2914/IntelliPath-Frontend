import React, { useEffect, useState } from "react";
import { Table, Row, Col, Select } from "antd";
import NavbarMain from "../../components/Navbar/NavbarMain";
import TitleMain from "../../components/Title/TitleMain";
import "./styles/Leaderboard.css";
import Footer from "../../components/Footer/Footer";
import useWindowWidth from "../../hooks/useWindowWidth";
import { leaderboardColumns } from "./LeaderboardColumns";
import { useNavigate } from "react-router-dom";
import { AVAILABLE_GOALS } from "../../utils/GlobalSettings";
import { useSelector } from "react-redux";
import useSpeech from "../../utils/WebSpeech.js/functionalities/useSpeech";
import { LB__SELECT, LB__USER } from "../../utils/WebSpeech.js/functionalities/useSpeechText";
import { API_GET_SCORE_CARD } from "../../apis/LeaderBoardApis";

const { Option } = Select;

const LeaderboardMain = () => {
  const { token, isLoggedIn } = useSelector((state) => state.authToken);
  const { speakWord } = useSpeech();
  const windowWidth = useWindowWidth();
  const navigate = useNavigate();
  const columns = leaderboardColumns(windowWidth);

  const [userScoreCard, setUserScoreCard] = useState([]);
  const [otherUsersScoreCards, setOtherUsersScoreCards] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Frontend Developer");
const [rawData, setRawData] = useState(null);

const getScoreCard = async () => {
  const response = await API_GET_SCORE_CARD(token);
  console.log(response)
  const user = response?.user_scorecard;
  const others = (response?.other_users_scorecards || []).filter(
    (item) => item.user_id !== user?.user_id
  );

  // Combine current user and others without duplication
  const combined = [user, ...others];

  // Normalize, sort, and assign position
  const mappedUsers = combined.map((item) => ({
    user_id: item?.user_id,
    name: item?.full_name,
    email: item?.email,
    profile_picture: item?.profile_picture,
    points: item?.data?.[selectedCategory] || 0,
    masteries: Object.keys(item?.data || {}),
  }));

  const sorted = mappedUsers.sort((a, b) => b.points - a.points);
  const final = sorted.map((item, index) => ({
    ...item,
    position: index + 1,
  }));

  const currentUser = final.find((item) => item.user_id === user?.user_id);

  setUserScoreCard([currentUser]);
  setOtherUsersScoreCards(final);
};



useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  getScoreCard();
}, [selectedCategory]);


  const handleRowClick = (record) => {
    navigate(`/profile/${record.user_id}`, { state: { user_id: record.user_id } });
  };

  const handleSelectChange = (value) => {
    setSelectedCategory(value);
    console.log("Selected category:", value);
  };

  return (
    <>
      <NavbarMain />
      <TitleMain
        title="Leaderboard"
        description="Showcasing top achievers and their accomplishments!"
      />

      <div className="generic-container">
        <div className="leaderboard-select">
          <Select
            defaultValue="Frontend Developer"
            onChange={handleSelectChange}
            onMouseEnter={() => speakWord(LB__SELECT)}
          >
            {AVAILABLE_GOALS?.map((item) => (
              <Option key={item} value={item} onMouseEnter={() => speakWord(item)}>
                {item}
              </Option>
            ))}
          </Select>
        </div>

        {isLoggedIn && userScoreCard.length > 0 && (
          <Table
            dataSource={userScoreCard}
            columns={columns}
            pagination={false}
            className="leaderboard-table-single"
            showHeader={false}
            rowKey="user_id"
            onRow={(record) => ({
              onClick: () => handleRowClick(record),
              onMouseEnter: () =>
                speakWord(LB__USER(record?.position, record?.name, record?.points)),
            })}
          />
        )}

        <p
          className="leaderboard-title"
          onMouseEnter={() => speakWord(`Goal : ${selectedCategory}`)}
        >
          Goal : {selectedCategory}
        </p>

        <Table
          dataSource={otherUsersScoreCards}
          columns={columns}
          pagination={{ pageSize: 15, position: ["bottomRight"] }}
          rowKey="user_id"
          className="leaderboard-table"
          onRow={(record) => ({
            onClick: () => handleRowClick(record),
            onMouseEnter: () =>
              speakWord(LB__USER(record?.position, record?.name, record?.points)),
          })}
        />
      </div>
      <Footer />
    </>
  );
};

export default LeaderboardMain;
