import axios from "axios";
import { message } from "antd";
import { DOMAIN_NAME } from "../utils/GlobalSettings";

export const API_GET_QUIZ = async (token, roadmap_module) => {
    console.log(roadmap_module)
  try {
    const response = await axios.get(`${DOMAIN_NAME}/quiz/get_quiz/`, {
      params: {
        roadmap_module: roadmap_module
      },
      headers: {
        Authorization: token,
      },
    });
    console.log('API_GET_QUIZ',response)
    return response.data;
  } catch (error) {
    console.log(error);
    // message.error(error.response?.data?.message);
    return false;
  }
};

export const API_GENERATE_QUIZZES = async (token,user_id) => {
  try {
    const response = await axios.post(
      `${DOMAIN_NAME}/quiz/generate_quizzes/`,
      {
        user_id:user_id
      }, // empty body
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
    return false;
  }
};
export const API_COMPLETE_QUIZ = async (token,roadmap_module,level,score) => {
    console.log(token,roadmap_module,level,score)
  try {
    const response = await axios.post(
      `${DOMAIN_NAME}/quiz/complete_quiz/`,
      {
        roadmap_module:roadmap_module,
        level:level,
        score:score
      },
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
    return false;
  }
};
