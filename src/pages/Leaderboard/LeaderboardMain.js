import React, { useState } from "react";
import { Select, Input } from "antd";
import NavbarMain from "../../components/Navbar/NavbarMain";
import TitleMain from "../../components/Title/TitleMain";
import Footer from "../../components/Footer/Footer";
import useWindowWidth from "../../hooks/useWindowWidth";
import { leaderboardColumns } from "./LeaderboardColumns";
import { AVAILABLE_GOALS } from "../../utils/GlobalSettings";
import { useSelector } from "react-redux";
import useSpeech from "../../utils/WebSpeech.js/functionalities/useSpeech";
import { LB__SELECT } from "../../utils/WebSpeech.js/functionalities/useSpeechText";
import CustomSpinner from "../../components/Loader/CustomSpinner";
import { useLeaderboard } from "./hooks/useLeaderboard";
import LeaderboardTable from "./components/LeaderboardTable";
import { DEFAULT_PAGE_SIZE, PAGE_SIZE_OPTIONS } from "./constants";
import './styles/Leaderboard.css'

const { Option } = Select;

const LeaderboardMain = () => {
  const { token, isLoggedIn } = useSelector((state) => state.authToken);
  const { speakWord } = useSpeech();
  const windowWidth = useWindowWidth();
  const columns = leaderboardColumns(windowWidth);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  const { isLoading, userScoreCard, otherUsersScoreCards, selectedCategory, setSelectedCategory, } = useLeaderboard(token);

  const handleSelectChange = (value) => {
    setSelectedCategory(value);
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const filteredUserScoreCard = userScoreCard.filter(user => 
    user.name?.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredOtherUsersScoreCards = otherUsersScoreCards.filter(user => 
    user.name?.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <NavbarMain />
      <TitleMain  title="Leaderboard"  description="Showcasing top achievers and their accomplishments!"  />

      {isLoading ? (
        <div className="tribe-explore-spinner-wrapper">
          <CustomSpinner />
        </div>
      ) : (
        <div className="generic-container" style={{display: "flex", justifyContent: "center"}}>
            <div className="leaderboard-main">
          <div className="leaderboard-select">
            
          <p className="leaderboard-title" onMouseEnter={() => speakWord(`Goal : ${selectedCategory}`)}>
            Goal : {selectedCategory}
          </p>
            <Select defaultValue={selectedCategory} onChange={handleSelectChange} onMouseEnter={() => speakWord(LB__SELECT)} >
              <Option value="All" onMouseEnter={() => speakWord("All")}>
                All
              </Option>
              {AVAILABLE_GOALS?.map((item) => (
                <Option key={item} value={item} onMouseEnter={() => speakWord(item)}>
                  {item}
                </Option>
              ))}
            </Select>
          </div>
              <div className="leaderboard-search">
                <Input.Search
                  placeholder="Search by name..."
                  allowClear
                  onSearch={handleSearch}
                  onChange={(e) => handleSearch(e.target.value)}
                  style={{ width: "100%", marginBottom: 16 }}
                />
              </div>
          {isLoggedIn && filteredUserScoreCard.length > 0 && (
            <LeaderboardTable
              dataSource={filteredUserScoreCard}
              columns={columns}
              pagination={false}
              className="leaderboard-table-single"
              showHeader={false}
            />
          )}

          <LeaderboardTable
            dataSource={filteredOtherUsersScoreCards}
            columns={columns}
            pagination={{
              current: currentPage,
              pageSize: pageSize,
              showSizeChanger: true,
              pageSizeOptions: PAGE_SIZE_OPTIONS,
              onChange: (page, size) => {
                setCurrentPage(page);
                setPageSize(size);
              },
              position: ["bottomRight"],
            }}
              className="leaderboard-table"
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default LeaderboardMain;
