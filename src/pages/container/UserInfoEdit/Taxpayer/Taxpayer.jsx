import React, { Component, Fragment } from 'react';
import {
  Row, Col, Form, Input, Radio, Select, DatePicker, Button,
} from 'antd';
import { PageCell } from '$pages/components/PageLayouts';

const { Column } = PageCell;

export default class Taxpayer extends Component {
  state = { }

  render() {
    const gutter = 15;
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const formTwoLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    return (
      <PageCell>
        <Column>
          <Form layout="horizontal" className="form" {...formItemLayout}>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="税务客户登记名" required>
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="税务登记号" required>
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="是否一般纳税人" required>
                  <Radio.Group>
                    <Radio value={1}>是</Radio>
                    <Radio value={2}>否</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="税务登记联系电话" required>
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={16}>
                <Form.Item label="税务登记地址" {...formTwoLayout}>
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="税务开户银行名称" required>
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="税务开户银行账号" required>
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="是否开增值税发票" required>
                  <Radio.Group>
                    <Radio value={1}>是</Radio>
                    <Radio value={2}>否</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="通知短信手机">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="通知邮箱号">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="取票方式">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="邮编" required>
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={16}>
                <Form.Item label="邮寄地址" {...formTwoLayout}>
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="开票点">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="纳税人取得时间" required>
                  <DatePicker placeholder="请输入" style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="当前状态">
                  <Select placeholder="请选择">
                    <Select.Option value="0">0</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="系统生效时间">
                  <DatePicker placeholder="请输入" style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="审批时间" required>
                  <DatePicker placeholder="请输入" style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Column>
      </PageCell>
    );
  }
}
