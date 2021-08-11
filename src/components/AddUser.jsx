import React from "react";
// import { Modal, Button, Typography } from "antd";
import {
  Form,
  Input,
  Checkbox,
  Modal,
  Button,
  Typography,
  Row,
  Select,
  Col,
} from "antd";

export default function AddUser({ isModalVisible, handleOk, handleCancel }) {
  const { Title } = Typography;
  const { Option } = Select;
  return (
    <Modal
      title=""
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Save"
      wrapClassName="adduser"
      width="65%"
      className="adduser__modal"
    >
      <div className="adduser__header">
        <Title level={3} className="adduser__title">
          Add User
        </Title>
        <Title level={5} className="adduser__subtitle">
          Employee Account
        </Title>
      </div>
      <div className="adduser__content">
        <Form
          className="adduser__form"
          name="basic"
          layout="vertical"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          //  onFinish={onFinish}
          //  onFinishFailed={onFinishFailed}
        >
          <Row>
            <Col span={16}>
              <div className="adduser__information">
                <div className="adduser__information-title">
                  <Title level={5} className="title">
                    Information
                  </Title>
                </div>
                <div className="adduser__information-content">
                  <Col span={12}>
                    <Form.Item
                      label="First Name"
                      name="firstname"
                      rules={[{ message: "First Name" }]}
                      className="adduser__label"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Position"
                      name="position"
                      rules={[{ message: "Position" }]}
                      className="adduser__label"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="team"
                      label="Team"
                      rules={[{ message: "Team" }]}
                    >
                      <Select
                        // placeholder="Select a option and change input text above"
                        // onChange={onGenderChange}
                        allowClear
                      >
                        <Option value="Development">Development</Option>
                        <Option value="business">Business</Option>
                        <Option value="other">Other</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Last Name"
                      name="lastname"
                      rules={[{ message: "Last Name" }]}
                      className="adduser__label"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div className="adduser__permission">
                <div className="adduser__information-title">
                  <Title level={5} className="title">
                    Permission
                  </Title>
                </div>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  );
}
