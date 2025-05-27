import axios from "axios";
import { message } from "antd";
import { DOMAIN_NAME, SHOW_API_ERRORS } from "../utils/GlobalSettings";

export const API_GENERATE_ROADMAP = async (
  token,
  UserSelections,
  is_regenerate,
  setShowSpinner
) => {
  setShowSpinner(true);
  let OnboardingData = {};
  if (is_regenerate) {
    OnboardingData = {
      is_regenerate: is_regenerate,
    };
  } else {
    OnboardingData = {
      education: UserSelections[0],
      goal_domain: UserSelections[1],
      goal_skill: UserSelections[2],
      current_skill_level: UserSelections[3],
      time_dedication_per_week: UserSelections[4],
      goal_completion_time: UserSelections[5],
      is_regenerate: is_regenerate,
    };
  }

  let response;
  let retries = 0;
  const MAX_RETRIES = 3;
  try {
    do {
      response = await axios.post(
        `${DOMAIN_NAME}/roadmap/generate_roadmap/`,
        OnboardingData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      retries++;
    } while ((response?.data?.error || !response) && retries < MAX_RETRIES);
    message.success("Roadmap Generated successfully!");
    return response.data;
  } catch (error) {
    message.error(error.response?.data?.message);
    {
      SHOW_API_ERRORS && console.log(error);
    }
    return null;
  } finally {
    setShowSpinner(false);
  }
};

export const API_GET_ROADMAP = async (token, setShowSpinner) => {
  try {
    const response = await axios.get(`${DOMAIN_NAME}/roadmap/get_roadmap/`, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    {
      SHOW_API_ERRORS && console.log(error);
    }
   
    return false;
  } 
};

export const API_DELETE_ROADMAP = async (token, setShowSpinner, navigate) => {
  setShowSpinner(true);

  try {
    const response = await axios.post(
      `${DOMAIN_NAME}/roadmap/delete_roadmap/`,
      {}, 
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    message.success("Roadmap Deleted Successfully");
    navigate("/onboarding");
    return response.data;
  } catch (error) {
    {
      SHOW_API_ERRORS && console.log(error);
    }
    message.error(
      error.response?.data?.error ||
        "Failed to delete roadmap. Please try again."
    );
  } finally {
    setShowSpinner(false);
  }
};
