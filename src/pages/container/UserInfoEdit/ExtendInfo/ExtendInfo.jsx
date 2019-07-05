import React, { Component, Fragment } from 'react';
import {
  Row, Col, Form, Input, Radio, InputNumber, Button,
} from 'antd';
import SelectNationality from '$pages/components/SelectNationality';
import { PageCell } from '$pages/components/PageLayouts';

const { Column } = PageCell;

export default class ManageEvaluate extends Component {
  state = { }

  render() {
    const gutter = 15;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const formTwoLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 21 },
    };
    return (
      <PageCell>
        <Column>
          <Form layout="horizontal" className="form" {...formItemLayout}>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="姓名">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="名称简拼">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="英文名称">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="性别">
                  <Radio.Group>
                    <Radio value={1}>男</Radio>
                    <Radio value={2}>女</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="生日">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="婚姻状况">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="国籍">
                  <SelectNationality />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="民族">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="籍贯">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="学历">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="职业">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="工作单位">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="学校">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="学院">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="年纪">
                  <InputNumber placeholder="请输入" style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="个人网站">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="特长">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="爱好">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="通信关注度">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="消费特征">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="忌讳事务">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="收入">
                  <InputNumber placeholder="请输入" style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="生活方式">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="宗教信仰">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="预案政策">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={16}>
                <Form.Item label="备注" {...formTwoLayout}>
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Column>
      </PageCell>
    );
  }
}
