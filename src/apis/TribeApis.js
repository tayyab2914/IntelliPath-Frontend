import axios from "axios";
import { message } from "antd";
import { DOMAIN_NAME, SHOW_API_ERRORS } from "../utils/GlobalSettings";

export const API_GET_JOINED_TRIBES = async (token, setShowSpinner) => {
  setShowSpinner(true);
  try {
    const response = await axios.get(
      `${DOMAIN_NAME}/tribes/get_joined_tribes/`,
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
    message.error(error.response?.data?.message);
  } finally {
    setShowSpinner(false);
  }
};
export const API_GET_ALL_TRIBES = async (token, setShowSpinner) => {
  setShowSpinner(true);
  try {
    const response = await axios.get(`${DOMAIN_NAME}/tribes/get_all_tribes/`, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    {
      SHOW_API_ERRORS && console.log(error);
    }
    message.error(error.response?.data?.message);
  } finally {
    setShowSpinner(false);
  }
};
export const API_GET_THREADS_LIST = async (token, tribe_id, setShowSpinner) => {
    setShowSpinner(true)
  try {
    const response = await axios.get(
      `${DOMAIN_NAME}/tribes/get_threads_list/`,
      {
        params: {
          tribe_id: tribe_id,
        },
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
    const errorMessage =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    message.error(errorMessage);
  } finally {
    setShowSpinner(false)
  }

};
export const API_GET_MESSAGES = async (
  token,
  tribe_id,
  thread_id,
  setShowSpinner
) => {
  try {
    const response = await axios.get(`${DOMAIN_NAME}/tribes/get_messages/`, {
      params: {
        tribe_id,
        thread_id: Number(thread_id),
      },
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    {
      SHOW_API_ERRORS && console.log(error);
    }
  } finally {
  }
};
export const API_GET_TRIBE_MEMBERS = async (token, tribe_id) => {
  console.log(tribe_id);
  try {
    const response = await axios.get(
      `${DOMAIN_NAME}/tribes/get_tribe_members/${tribe_id}/`,
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
  }
};

export const API_EDIT_TRIBE = async (token, updatedTribe, setShowSpinner) => {
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
  }
};

export const API_DELETE_TRIBE = async (token, id, setShowSpinner) => {
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
  }
};
export const API_DELETE_THREAD = async (token, id, setShowSpinner) => {
  //   setShowSpinner(true);
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

    message.success("Thread Deleted Successfully");
    return response.data;
  } catch (error) {
    {
      SHOW_API_ERRORS && console.log(error);
    }
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
