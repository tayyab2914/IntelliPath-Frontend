import axios from "axios";
import { DOMAIN_NAME, SHOW_API_ERRORS } from "../utils/GlobalSettings";

export const API_GET_USER_INFO = async (token, user_id) => {
  try {
    const response = await axios.get(
      `${DOMAIN_NAME}/leaderboard/get_user_information/`,
      {
        params: { user_id },
        headers: {
          Authorization: token,
        },
      }
    );

    return response.data;
  } catch (error) {
    {
      SHOW_API_ERRORS && console.log(error);
    }
  }
};

export const API_GET_SCORE_CARD = async (token, setShowSpinner) => {
  setShowSpinner(true);
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
    {
      SHOW_API_ERRORS && console.log(error);
    }
  } finally {
    setShowSpinner(false);
  }
};
export const API_GET_SIMILAR_USERS = async (token, user_id) => {
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
    {
      SHOW_API_ERRORS && console.log(error);
    }
  }
};
export const API_GET_SIMILAR_USERS_TRIBE = async (
  token,
  user_id,
  goalDomain,
  is_tribe 
) => {
  try {
    const response = await axios.get(
      `${DOMAIN_NAME}/leaderboard/get_similar_users/?user_id=${user_id}&goal_domain=${goalDomain}&is_tribe=${is_tribe}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    return response.data;
  } catch (error) {
    {
      SHOW_API_ERRORS && console.log(error);
    }
  }
};
