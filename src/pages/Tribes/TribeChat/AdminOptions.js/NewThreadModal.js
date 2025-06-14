import { Modal, Input, Select, Form, message, Spin } from 'antd';
import React, { useState } from 'react';
import { API_CREATE_THREAD } from '../../../../apis/TribeApis';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setRerenderTribePage } from '../../../../redux/AuthToken/Action';
import { DESCRIPTION_RULES_REQUIRED } from '../../../../utils/Rules';

const { TextArea } = Input;

const NewThreadModal = ({ visible, onClose }) => {
    const dispatch = useDispatch()
  const [form] = Form.useForm();
  const [ShowSpinner, setShowSpinner] = useState(false);
  const { token,rerender_tribe_page} = useSelector((state) => state.authToken);
  const { tribe_id } = useParams(); // Get tribe_id from URL params
  
  const submitHandler = () => {
    form.validateFields()
      .then(values => {
        const threadData = {
          tribe_id: tribe_id,
          name: values.name,
          description: values.description,
        };
        API_CREATE_THREAD(token, threadData, setShowSpinner)
        dispatch(setRerenderTribePage(!rerender_tribe_page))
        onClose()
      })
      .catch(info => {
        console.log("Validation Failed:", info);
      });
  };

  return (
    <>
      {ShowSpinner && <Spin fullscreen />}
      <Modal 
        title="Start Your Path to Success"  
        visible={visible}  
        onOk={submitHandler}  
        onCancel={onClose} 
        okText="Create Thread" 
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Thread Title" rules={[{ required: true, message: 'Please enter a title for the thread!' }]}>
            <Input placeholder="Enter thread title" maxLength={50} />
          </Form.Item>

          <Form.Item name="description" label="Description" rules={DESCRIPTION_RULES_REQUIRED}>
            <TextArea placeholder="Enter a short description (max 150 characters)" maxLength={150} rows={3} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default NewThreadModal;
