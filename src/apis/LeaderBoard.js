import axios from "axios";
import { message } from "antd";
import { setAuthToken, setLoggedIn } from "../redux/AuthToken/Action";
import { DOMAIN_NAME } from "../utils/GlobalSettings";
import CheckableTag from "antd/es/tag/CheckableTag";

export const API_GET_USER_INFO = async (token, user_id) => {
    console.log(token)
    console.log('API_GET_USER_INFO',user_id)
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
  
