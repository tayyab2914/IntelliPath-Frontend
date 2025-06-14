import axios from "axios";
import { message } from "antd";
import { DOMAIN_NAME, SHOW_API_ERRORS } from "../utils/GlobalSettings";


export const API_GENERATE_ON_DEMAND_CONTENT = async (token,query) => {
  try {
    const response = await axios.post(
      `${DOMAIN_NAME}/contentgen/generate_ondemand_content/`,
      {
        query:query
      }, // empty body
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
        {SHOW_API_ERRORS && console.log(error);}

    // message.error(error.response?.data?.message);
    return false;
  }
};
