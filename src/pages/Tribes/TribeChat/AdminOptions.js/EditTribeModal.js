import { Modal, Input, Select, Form, message, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { API_EDIT_TRIBE, API_GET_JOINED_TRIBES } from "../../../../apis/TribeApis";
import { setRerenderTribePage } from "../../../../redux/AuthToken/Action";
import { AVAILABLE_GOALS } from "../../../../utils/GlobalSettings";
import { DESCRIPTION_RULES_REQUIRED } from "../../../../utils/Rules";

const { Option } = Select;
const { TextArea } = Input;

const EditTribeModal = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  const { tribe_id } = useParams();
  const { token, rerender_tribe_page } = useSelector((state) => state.authToken);
  const dispatch = useDispatch();
  const [ShowSpinner, setShowSpinner] = useState(false);
  const [TribeInfo, setTribeInfo] = useState(null);

  const fetchTribeDetails = async () => {
    const response = await API_GET_JOINED_TRIBES(token,setShowSpinner);
    const tribe = response.find((tribe) => tribe.id == tribe_id);
    setTribeInfo(tribe);
  };

  useEffect(() => {
    if (visible) {
      fetchTribeDetails();
    }
  }, [visible, tribe_id]);

  useEffect(() => {
    if (TribeInfo) {
      form.setFieldsValue({
        name: TribeInfo.name,
        category: TribeInfo.category,
        description: TribeInfo.description,
      });
    }
  }, [TribeInfo]);

  const submitHandler = async () => {
    try {
      const values = await form.validateFields();
      const updatedValues = { ...values, tribe_id };
        await API_EDIT_TRIBE(token,updatedValues,setShowSpinner)
      dispatch(setRerenderTribePage(!rerender_tribe_page));
      onClose();
    } catch (info) {
      console.log("Validation Failed:", info);
    }
  };
  

  return (
    <>
      {/* {ShowSpinner && <Spin fullscreen />} */}
      <Modal
        title="Edit Tribe"
        visible={visible}
        onOk={submitHandler}
        onCancel={onClose}
        okText="Save Changes"
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical">

          <Form.Item name="name" label="Tribe Title" rules={[ { required: true, message: "Please enter a title for the tribe!" }, ]} >
            <Input placeholder="Enter tribe title" />
          </Form.Item>

          <Form.Item name="category" label="Select Category" rules={[ { required: true, message: "Please select a category!" }, ]} >
            <Select className="tribe-explore-select" placeholder="Select Category" style={{ width: "100%" }} >
              {AVAILABLE_GOALS.map((goal) => (
                <Option key={goal} value={goal}> {goal} </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="description" label="Description" rules={DESCRIPTION_RULES_REQUIRED} >
            <TextArea placeholder="Enter a short description (max 150 characters)" maxLength={150} rows={3}/>
          </Form.Item>
          
        </Form>
      </Modal>
    </>
  );
};

export default EditTribeModal;
