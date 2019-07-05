import React, { Component } from 'react';
import {
  Modal, Form, Input, Button,
} from 'antd';
import style from './SpecialApproval.module.scss';

const { TextArea } = Input;

export default class SpecialApproval extends Component {
  state = { }

  render() {
    const { visible, onCancel } = this.props;
    return (
      <Modal
        title="费用特批验证"
        width={360}
        visible={visible}
        onCancel={onCancel}
        footer={null}
        className={style.container}
      >
        <Form layout="horizontal" className="form">
          <Form.Item label="特批工号">
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item label="特批密码">
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item label="特批片区">
            <TextArea placeholder="请输入" rows={3} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" block size="large">验证</Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
