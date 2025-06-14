import React from "react";
import { Form, Input } from "antd";
import { LockOutlined } from '@ant-design/icons';
import { formRules } from '../../data/authData';
import '../../styles/signin.css';
import MyButton from "../../../../components/Button/Button";

const NewPasswordForm = ({ onNewPasswordSubmit }) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      onNewPasswordSubmit(values.password);
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  return (
    <Form form={form} name="newPasswordForm" className="signin-form" layout="vertical">
      <h2 className="form-title">Set New Password</h2>

      <Form.Item hasFeedback label="New Password" name="password" rules={formRules.password} className="form-item">
        <Input.Password placeholder="Enter new password" className="input-field" prefix={<LockOutlined />} />
      </Form.Item>

      <Form.Item 
        label="Confirm Password" 
        name="confirmPassword" 
        dependencies={['password']} 
        hasFeedback 
        rules={formRules.confirmPassword} 
        className="form-item"
      >
        <Input.Password placeholder="Confirm new password" className="input-field" prefix={<LockOutlined />} />
      </Form.Item>

      <Form.Item>
        <MyButton variant="filled" text={'Set New Password'} onClick={handleSubmit} w="100%" h="40px" m="0px"/>
      </Form.Item>
    </Form>
  );
};

export default NewPasswordForm; 