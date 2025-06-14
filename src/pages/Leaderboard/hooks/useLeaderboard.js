import { useState, useEffect } from 'react';
import { API_GET_SCORE_CARD } from '../../../apis/LeaderBoardApis';
import { sortAndProcessLeaderboard } from '../utils/leaderboardUtils';
import { DEFAULT_CATEGORY } from '../constants';

export const useLeaderboard = (token) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userScoreCard, setUserScoreCard] = useState([]);
  const [otherUsersScoreCards, setOtherUsersScoreCards] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);
  const [allData, setAllData] = useState({});

  const fetchScoreCard = async () => {
      const response = await API_GET_SCORE_CARD(token,setIsLoading);
      setAllData(response);
      const { userScoreCard, otherUsersScoreCards } = sortAndProcessLeaderboard(response, selectedCategory);
      setUserScoreCard(userScoreCard);
      setOtherUsersScoreCards(otherUsersScoreCards);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchScoreCard();
  }, []);

  useEffect(() => {
    const { userScoreCard, otherUsersScoreCards } = sortAndProcessLeaderboard(allData, selectedCategory);
    setUserScoreCard(userScoreCard);
    setOtherUsersScoreCards(otherUsersScoreCards);
  }, [selectedCategory, allData]);

  return { isLoading, userScoreCard, otherUsersScoreCards, selectedCategory, setSelectedCategory, fetchScoreCard,  };
}; 