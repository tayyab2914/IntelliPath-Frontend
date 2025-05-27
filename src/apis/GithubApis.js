import axios from "axios";
import { message } from "antd";
import { DOMAIN_NAME } from "../utils/GlobalSettings";


export const API_GET_REPO_LIST = async (token) => {
    // setShowSpinner(true);
    try {
      const response = await axios.get(`${DOMAIN_NAME}/github/get_repo_list/`, {
        headers: {
          Authorization: token,
        },
      });
  
      return response.data;
    } catch (error) {
            {SHOW_API_ERRORS && console.log(error);}
      // message.error(error.response?.data?.message);
      return false;
    } finally {
      //   setShowSpinner(false);
    }
  };
export const API_GET_REPO_REPORT = async (token) => {
    // setShowSpinner(true);
    try {
      const response = await axios.get(`${DOMAIN_NAME}/github/get_repo_report/`, {
        headers: {
          Authorization: token,
        },
      });
  
      return response.data;
    } catch (error) {
            {SHOW_API_ERRORS && console.log(error);}
      // message.error(error.response?.data?.message);
      return false;
    } finally {
      //   setShowSpinner(false);
    }
  };

  export const API_SET_AND_EVALUATE_REPO = async (token, repo_name, setShowSpinner) => {
    setShowSpinner(true);
  
    try {
      const response = await axios.post(
        `${DOMAIN_NAME}/github/set_and_evaluate_repo/`,
        {repo_name},
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return response.data;
    } catch (error) {
            {SHOW_API_ERRORS && console.log(error);}
      message.error(error.response?.data?.error);
      return null;
    } finally {
      setShowSpinner(false);
    }
  };