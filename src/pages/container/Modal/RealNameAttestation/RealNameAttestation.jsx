import React, { Component } from 'react';
import {
  Modal, Tabs, Form, Select, Button, Input, Row, Col,
} from 'antd';
import style from './RealNameAttestation.module.scss';

const { TabPane } = Tabs;
const InputGroup = Input.Group;
const { Option } = Select;

export default class RealNameAttestation extends Component {
  state = { }

  render() {
    return (
      <Modal
        title={(
          <Tabs defaultActiveKey="1" className={style.head}>
            <TabPane tab="客户证件" key="1" />
            <TabPane tab="产权证件" key="2" />
            <TabPane tab="业务登记单" key="3" />
          </Tabs>
        )}
        width={400}
        visible
        className={style.wrap}
        footer={null}
      >
        <Form layout="horizontal" className={style.form}>
          <Form.Item label="证件类型">
            <InputGroup className={style.group}>
              <Select defaultValue="0" className={style.full}>
                <Option value="0">身份证</Option>
              </Select>
              <Button>读身份证</Button>
            </InputGroup>
          </Form.Item>
          <Form.Item label="证件号码">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" block size="large">验证</Button>
          </Form.Item>
          <Form.Item className="text-center">
            <a>免验证，直接通过</a>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
