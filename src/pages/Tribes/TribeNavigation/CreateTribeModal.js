import { Modal, Input, Select, Form, message } from 'antd';
import React, { useState } from 'react';
import { AVAILABLE_GOALS } from '../../../utils/GlobalSettings';

const { Option } = Select;
const { TextArea } = Input;

const CreateTribeModal = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  
  const submitHandler = () => {
    form.validateFields()
      .then(values => {
        console.log("Form Values:", values); 
        onClose(); 
        form.resetFields(); 
      })
      .catch(info => {
        console.log("Validation Failed:", info);
      });
  };
  
  return (
    <Modal  title="Start Your Path to Success"  visible={visible}  onOk={submitHandler}  onCancel={onClose} okText="Create Tribe" cancelText="Cancel" >
      <Form form={form} layout="vertical">
        <Form.Item name="title" label="Tribe Title" rules={[{ required: true, message: 'Please enter a title for the tribe!' }]} >
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
  );
};

export default CreateTribeModal;
