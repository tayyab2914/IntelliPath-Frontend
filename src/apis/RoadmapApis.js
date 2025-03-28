
import axios from "axios";
import { message } from "antd";
import { DOMAIN_NAME } from "../utils/GlobalSettings";

export const API_GENERATE_ROADMAP = async (token, UserSelections, is_regenerate, setShowSpinner) => {
    setShowSpinner(true);
  console.log(UserSelections)
  const OnboardingData = {
    education: UserSelections[0],
    goal_domain: UserSelections[1],
    goal_skill: UserSelections[2],
    current_skill_level: UserSelections[3],
    time_dedication_per_week: UserSelections[4],
    goal_completion_time: UserSelections[5],
    is_regenerate: is_regenerate
  }

  console.log(OnboardingData)
    try {
      const response = await axios.post(
        `${DOMAIN_NAME}/roadmap/generate_roadmap/`,
        OnboardingData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response)
      message.success("Roadmap Generated successfully!");
      return response.data;
    } catch (error) {
      message.error(error.response?.data?.message);
      console.log(error.response);
      return null;
    } finally {
      setShowSpinner(false);
    }
  };

  export const API_GET_ROADMAP = async (token) => {
    // setShowSpinner(true);
    try {
      const response = await axios.get(
        `${DOMAIN_NAME}/roadmap/get_roadmap/`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
  
      return response.data;
    } catch (error) {
      console.log(error)
      // message.error(error.response?.data?.message);
      return false
    } finally {
      //   setShowSpinner(false);
    }
  };
