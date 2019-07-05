import React, { Component, Fragment } from 'react';
import {
  Row, Col, Form, Input, Select, Button,
} from 'antd';
import { PageCell } from '$pages/components/PageLayouts';

const { Column } = PageCell;

export default class ManageEvaluate extends Component {
  state = { }

  render() {
    const gutter = 15;
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    return (
      <PageCell>
        <Column title="客户标识信息">
          <Form layout="horizontal" className="form" {...formItemLayout}>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="客户品牌">
                  <Select placeholder="请选择">
                    <Select.Option value="0">0</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="客户子品牌">
                  <Select placeholder="请选择">
                    <Select.Option value="0">0</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="客户分群">
                  <Select placeholder="请选择">
                    <Select.Option value="0">0</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="移动中高端标识">
                  <Select placeholder="请选择">
                    <Select.Option value="0">0</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="会员级别">
                  <Select placeholder="请选择">
                    <Select.Option value="0">0</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Column>
        <Column title="政企标识信息">
          <Form layout="horizontal" className="form" {...formItemLayout}>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="客户收入等级">
                  <Select placeholder="请选择">
                    <Select.Option value="0">0</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="行业类别">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="销售组织一级">
                  <Select placeholder="请选择">
                    <Select.Option value="0">0</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="销售组织二级">
                  <Select placeholder="请选择">
                    <Select.Option value="0">0</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="销售组织三级">
                  <Select placeholder="请选择">
                    <Select.Option value="0">0</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="销售组织四级">
                  <Select placeholder="请选择">
                    <Select.Option value="0">0</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="场所类别">
                  <Select placeholder="请选择">
                    <Select.Option value="0">0</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="场所编码">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="市场名称">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="管控级别">
                  <Select placeholder="请选择">
                    <Select.Option value="0">0</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="管控客户编码">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="管控客户名称">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="保密级别">
                  <Select placeholder="请选择">
                    <Select.Option value="0">0</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="电路管控级别">
                  <Select placeholder="请选择">
                    <Select.Option value="0">0</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Column>
        <Column title="分级管理属性">
          <Form layout="horizontal" className="form" {...formItemLayout}>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="重点客户标志">
                  <Select placeholder="请选择">
                    <Select.Option value="0">0</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="客户重要等级">
                  <Select placeholder="请选择">
                    <Select.Option value="0">0</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="客户服务等级">
                  <Select placeholder="请选择">
                    <Select.Option value="0">0</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={8}>
                <Form.Item label="信用等级">
                  <Select placeholder="请选择">
                    <Select.Option value="0">0</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Column>
      </PageCell>
    );
  }
}
