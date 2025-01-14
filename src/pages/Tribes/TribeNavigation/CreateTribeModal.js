import { Modal, Input, Select, Form, message, Spin } from 'antd';
import React, { useState } from 'react';
import { AVAILABLE_GOALS } from '../../../utils/GlobalSettings';
import { API_CREATE_TRIBE } from '../../../apis/TribeApis';
import { useDispatch, useSelector } from 'react-redux';
import { setRerenderTribePage } from '../../../redux/AuthToken/Action';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;
const { TextArea } = Input;

const CreateTribeModal = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  const [ShowSpinner, setShowSpinner] = useState(false);
  const { token,rerender_tribe_page} = useSelector((state) => state.authToken);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const submitHandler = async () => {
    try {
      const values = await form.validateFields();
      await API_CREATE_TRIBE(token, values, setShowSpinner);  
      onClose(); 
      form.resetFields(); 
        dispatch(setRerenderTribePage(!rerender_tribe_page))
        navigate('/tribes')
        
    } catch (info) {
      console.log("Validation Failed:", info);
    }
  };
  
  return (
    <>
    {ShowSpinner && <Spin fullscreen/>}
    <Modal  title="Start Your Path to Success"  visible={visible}  onOk={submitHandler}  onCancel={onClose} okText="Create Tribe" cancelText="Cancel" >
      <Form form={form} layout="vertical">
        <Form.Item name="name" label="Tribe Title" rules={[{ required: true, message: 'Please enter a title for the tribe!' }]} >
          <Input placeholder="Enter tribe title" />
        </Form.Item>

        <Form.Item name="category" label="Select Category" rules={[{ required: true, message: 'Please select a category!' }]} >
          <Select className="tribe-explore-select" placeholder="Select Category" style={{ width: '100%' }} >
            {AVAILABLE_GOALS.map((goal) => ( <Option key={goal} value={goal}>{goal}</Option> ))}
          </Select>
        </Form.Item>

        <Form.Item name="description" label="Description" rules={[ { required: true, message: 'Please enter a description!' }, { max: 150, message: 'Description cannot exceed 150 characters' }, ]} >
          <TextArea placeholder="Enter a short description (max 150 characters)" maxLength={150} rows={3} />
        </Form.Item>
      </Form>
    </Modal>
    </>
  );
};

export default CreateTribeModal;
