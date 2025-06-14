import React, { useEffect } from 'react';
import { Col, Divider, Form, Input, InputNumber, Row } from 'antd';
import './styles/Settings.css';

const SettingsBasicInfo = ({ form, setSettingsData, SettingsData }) => {
//   const [form] = Form.useForm();

  // Keep form in sync with SettingsData
  useEffect(() => {
    if (SettingsData) {
      form.setFieldsValue(SettingsData);
    }
  }, [SettingsData, form]);

  const onValuesChange = (changedValues, allValues) => {
    setSettingsData({ ...SettingsData, ...allValues });
  };

  const validateAge = (_, value) => {
    if (!value) return Promise.resolve();
    if (value < 10 || value > 100) {
      return Promise.reject(new Error('Age must be between 10 and 100'));
    }
    return Promise.resolve();
  };

  return (
    <div>
      <p className='settings-heading'>Basic Info</p>
      <Divider />
      <Form
        form={form}
        layout="vertical"
        onValuesChange={onValuesChange}
      >
        <Row>
          <Col xs={24} sm={12} lg={8}>
            <Form.Item
              label="Name"
              name="first_name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input className="setting-input" />
            </Form.Item>

            <Form.Item
              label="Age"
              name="age"
              rules={[
                { required: true, message: 'Please enter your age' },
                { validator: validateAge },
              ]}
            >
              <InputNumber
                className="setting-input"
                style={{ width: '100%' }}
                placeholder="Enter age (10-100)"
              />
            </Form.Item>

            <Form.Item
              label="LinkedIn"
              name="linkedin"
             
            >
              <Input className="setting-input" placeholder="Linkedin Username" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SettingsBasicInfo;
