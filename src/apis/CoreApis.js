import axios from "axios";
import { message } from "antd";
import { setAuthToken, setLoggedIn } from "../redux/AuthToken/Action";
import { DOMAIN_NAME, SHOW_API_ERRORS } from "../utils/GlobalSettings";
import CheckableTag from "antd/es/tag/CheckableTag";

export const API_GET_USER_ATTRIBUTE = async (token, setShowSpinner) => {
  // setShowSpinner(true);
  try {
    const response = await axios.get(
      `${DOMAIN_NAME}/core/get_user_attributes/`,
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
    // message.error(error.response?.data?.message);
  } finally {
    //   setShowSpinner(false);
  }
};

export const API_UPDATE_USER_ATTRIBUTE = async (
  token,
  updatedAttributes,
  setShowSpinner
) => {
  for (let [key, value] of updatedAttributes.entries()) {
    console.log(`${key}:`, value);
  }

  try {
    const response = await axios.put(
      `${DOMAIN_NAME}/core/update_user_attributes/`,
      updatedAttributes,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    message.success("Settings Updated Successfully");
    return response.data;
  } catch (error) {
    {
      SHOW_API_ERRORS && console.log(error);
    }
    //   message.error(error.response?.data?.message);
    return null;
  } finally {
    // setShowSpinner(false);
  }
};

export const API_CREATE_TRIBE = async (token, newTribe, setShowSpinner) => {
  setShowSpinner(true);

  try {
    const response = await axios.post(
      `${DOMAIN_NAME}/tribes/create_tribe/`,
      newTribe,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    message.success("Tribe created successfully!");
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
export const API_CREATE_THREAD = async (token, newThread, setShowSpinner) => {
  setShowSpinner(true);

  try {
    const response = await axios.post(
      `${DOMAIN_NAME}/tribes/create_thread/`,
      newThread,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    message.success("Tribe created successfully!");
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

export const API_EDIT_TRIBE = async (token, updatedTribe, setShowSpinner) => {
  // setShowSpinner(true);
  console.log(updatedTribe);

  try {
    const response = await axios.put(
      `${DOMAIN_NAME}/tribes/edit_tribe/`,
      updatedTribe,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    message.success("Tribe updated successfully!");
    return response.data;
  } catch (error) {
    {
      SHOW_API_ERRORS && console.log(error);
    }
    message.error(error.response?.data?.message);
    return null;
  } finally {
    // setShowSpinner(false);
  }
};

export const API_DELETE_TRIBE = async (token, id, setShowSpinner) => {
  //   setShowSpinner(true);
  console.log("id", id);
  try {
    const response = await axios.delete(`${DOMAIN_NAME}/tribes/delete_tribe/`, {
      params: {
        tribe_id: id,
      },
      headers: {
        Authorization: token,
      },
    });

    message.success("Tribe Deleted Successfully");
    return response.data;
  } catch (error) {
    {
      SHOW_API_ERRORS && console.log(error);
    }
  } finally {
    // setShowSpinner(false);
  }
};
export const API_DELETE_THREAD = async (token, id, setShowSpinner) => {
  //   setShowSpinner(true);
  console.log("id", id);
  try {
    const response = await axios.delete(
      `${DOMAIN_NAME}/tribes/delete_thread/`,
      {
        params: {
          thread_id: id,
        },
        headers: {
          Authorization: token,
        },
      }
    );

    message.success("Tribe Deleted Successfully");
    return response.data;
  } catch (error) {
    {
      SHOW_API_ERRORS && console.log(error);
    }
  } finally {
    // setShowSpinner(false);
  }
};

export const API_JOIN_TRIBE = async (token, tribe_id, setShowSpinner) => {
  setShowSpinner(true);

  try {
    const response = await axios.post(
      `${DOMAIN_NAME}/tribes/join_tribe/`,
      { tribe_id },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    message.success("Tribe joined successfully!");
    return response.data;
  } catch (error) {
    {
      SHOW_API_ERRORS && console.log(error);
    }
    message.error(error.response?.data?.message);
    return null;
  } finally {
    setShowSpinner(false);
  }
};
