import axios from "axios";
import { message } from "antd";
import { DOMAIN_NAME } from "../utils/GlobalSettings";

export const API_GET_COURSES = async (token, roadmap_module) => {
  try {
    const response = await axios.get(`${DOMAIN_NAME}/courses/get_courses/`, {
      params: {
        roadmap_module: roadmap_module, // or just roadmap_module if using shorthand
      },
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
          {SHOW_API_ERRORS && console.log(error);}
    // message.error(error.response?.data?.message);
    return false;
  }
};
export const API_GET_COURSE_INFO = async (token, course_id) => {
  try {
    const response = await axios.get(`${DOMAIN_NAME}/courses/get_course_info/`, {
      params: {
        course_id,
    },
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
          {SHOW_API_ERRORS && console.log(error);}
    // message.error(error.response?.data?.message);
    return false;
  }
};
export const API_RECOMMEND_COURSES = async (token,keyword) => {
  try {
    const response = await axios.post(
      `${DOMAIN_NAME}/courses/recommend_courses/`,
      {
        keyword:keyword
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
