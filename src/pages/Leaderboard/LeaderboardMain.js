import React, { useEffect, useState } from "react";
import { Table, Select } from "antd";
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
import CustomSpinner from "../../components/Loader/CustomSpinner";

const { Option } = Select;

const LeaderboardMain = () => {
  const { token, isLoggedIn } = useSelector((state) => state.authToken);
  const [ShowSpinner, setShowSpinner] = useState(true);
  const { speakWord } = useSpeech();
  const windowWidth = useWindowWidth();
  const navigate = useNavigate();
  const columns = leaderboardColumns(windowWidth);

  const [userScoreCard, setUserScoreCard] = useState([]);
  const [otherUsersScoreCards, setOtherUsersScoreCards] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getScoreCard = async () => {
    try {
      const response = await API_GET_SCORE_CARD(token,setShowSpinner);
      console.log(response);
      const user = response?.user_scorecard;
      const others = (response?.other_users_scorecards || []).filter(
        (item) => item.user_id !== user?.user_id
      );

      // Combine and normalize data
      const allUsers = [user, ...others].map((item) => ({
        user_id: item?.user_id,
        name: item?.full_name,
        email: item?.email,
        profile_picture: item?.profile_picture,
        points: selectedCategory === "All" ? item?.total_score : item?.data?.[selectedCategory] || 0,
        masteries: Object.keys(item?.data || {}),
        total_score: item?.total_score, // Store the total score for "All Fields"
      }));

      // If "All Fields" is selected, use total_score for sorting
      const sorted = selectedCategory === "All"
        ? allUsers.sort((a, b) => b.total_score - a.total_score)  // Sort by total score
        : allUsers.sort((a, b) => b.points - a.points);  // Sort by selected category points

      const final = sorted.map((item, index) => ({
        ...item,
        position: index + 1,
      }));

      const currentUser = final.find((item) => item.user_id === user?.user_id);
      const restUsers = final;

      setUserScoreCard(currentUser ? [currentUser] : []);
      setOtherUsersScoreCards(restUsers);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    }
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
  };

  return (
    <>
     {ShowSpinner && <CustomSpinner fullscreen={true}/>}
      <NavbarMain />
      <TitleMain
        title="Leaderboard"
        description="Showcasing top achievers and their accomplishments!"
      />

      <div className="generic-container">
        {/* Category Selector */}
        <div className="leaderboard-select">
          <Select
            defaultValue={selectedCategory}
            onChange={handleSelectChange}
            onMouseEnter={() => speakWord(LB__SELECT)}
          >
            <Option value="All" onMouseEnter={() => speakWord("All")}>
              All
            </Option>
            {AVAILABLE_GOALS?.map((item) => (
              <Option
                key={item}
                value={item}
                onMouseEnter={() => speakWord(item)}
              >
                {item}
              </Option>
            ))}
            {/* Add All Fields option */}
          </Select>
        </div>

        {/* Current User */}
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

        {/* Leaderboard Title */}
        <p
          className="leaderboard-title"
          onMouseEnter={() => speakWord(`Goal : ${selectedCategory}`)}
        >
          Goal : {selectedCategory}
        </p>

        {/* All Other Users */}
        <Table
          dataSource={otherUsersScoreCards}
          columns={columns}
          pagination={{
            pageSize: 15,
            showSizeChanger: true,
            pageSizeOptions: ["15", "30", "50", "100"],
            position: ["bottomRight"],
          }}
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
