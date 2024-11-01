
import { Modal, Input, Select, Form, message } from 'antd';
import React, { useState } from 'react';
import { AVAILABLE_GOALS } from '../../../utils/GlobalSettings';

const { Option } = Select;
const { TextArea } = Input;

const NewThreadModal = ({ visible, onClose }) => {
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
    <Modal  title="Start Your Path to Success"  visible={visible}  onOk={submitHandler}  onCancel={onClose} okText="Create Thread" cancelText="Cancel" >
      <Form form={form} layout="vertical">
        <Form.Item name="title" label="Thread Title" rules={[{ required: true, message: 'Please enter a title for the thread!' }]} >
          <Input placeholder="Enter thread title" />
        </Form.Item>

        <Form.Item name="description" label="Description" rules={[ { required: true, message: 'Please enter a description!' }, { max: 150, message: 'Description cannot exceed 150 characters' }, ]} >
          <TextArea placeholder="Enter a short description (max 150 characters)" maxLength={150} rows={3} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default NewThreadModal;
