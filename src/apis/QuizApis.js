import axios from "axios";
import { message } from "antd";
import { DOMAIN_NAME, SHOW_API_ERRORS } from "../utils/GlobalSettings";

export const API_GENERATE_QUIZ_BY_MODULE = async (token, roadmap_module,setShowSpinner) => {
  setShowSpinner(true)
  try {
    const response = await axios.post(
      `${DOMAIN_NAME}/quiz/generate_quiz_by_module/`,
      {
        roadmap_module_name: roadmap_module,
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
  }finally{
    setShowSpinner(false)
  }
};

export const API_GENERATE_QUIZZES = async (token, user_id) => {
  try {
    const response = await axios.post(
      `${DOMAIN_NAME}/quiz/generate_quizzes/`,
      {
        user_id: user_id,
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
export const API_COMPLETE_QUIZ = async (
  token,
  roadmap_module,
  level,
  score
) => {
  try {
    const response = await axios.post(
      `${DOMAIN_NAME}/quiz/complete_quiz/`,
      {
        roadmap_module: roadmap_module,
        level: level,
        score: score,
      },
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
