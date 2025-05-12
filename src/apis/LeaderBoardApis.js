import axios from "axios";
import { DOMAIN_NAME } from "../utils/GlobalSettings";

export const API_GET_USER_INFO = async (token, user_id) => {
    try {
      const response = await axios.get(
        `${DOMAIN_NAME}/leaderboard/get_user_information/`,
        {
          params: { user_id },  // query params go here
          headers: {
            Authorization: token,
          },
        }
      );
  
      return response.data;
    } catch (error) {
      console.log(error);
      // message.error(error.response?.data?.message);
    }
  };
  

export const API_GET_SCORE_CARD = async (token, user_id) => {
    try {
      const response = await axios.get(
        `${DOMAIN_NAME}/leaderboard/get_scorecard/`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
  
      return response.data;
    } catch (error) {
      console.log(error);
      // message.error(error.response?.data?.message);
    }
  };
export const API_GET_SIMILAR_USERS = async (token, user_id) => {
    console.log(user_id)
    try {
      const response = await axios.get(
        `${DOMAIN_NAME}/leaderboard/get_similar_users/?user_id=${user_id}`,
        { 
          headers: {
            Authorization: token,
          },
        }
      );
  
      return response.data;
    } catch (error) {
      console.log(error);
      // message.error(error.response?.data?.message);
    }
  };
export const API_GET_SIMILAR_USERS_TRIBE = async (token, user_id,goalDomain) => {

    try {
      const response = await axios.get(
        `${DOMAIN_NAME}/leaderboard/get_similar_users/?user_id=${user_id}&goal_domain=${goalDomain}`,
        { 
          headers: {
            Authorization: token,
          },
        }
      );
  
      return response.data;
    } catch (error) {
      console.log(error);
      // message.error(error.response?.data?.message);
    }
  };