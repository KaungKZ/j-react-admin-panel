import React from "react";
// import { Modal, Button, Typography } from "antd";
import { Form, Input, Checkbox, Modal, Button, Typography } from "antd";

export default function AddUser({ isModalVisible, handleOk, handleCancel }) {
  const { Title } = Typography;
  return (
    <Modal
      title=""
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      wrapClassName="adduser"
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
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          //  onFinish={onFinish}
          //  onFinishFailed={onFinishFailed}
        >
          <div className="adduser__information"></div>
          <div className="adduser__permission"></div>
        </Form>
      </div>
    </Modal>
  );
}
