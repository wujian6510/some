import React, { Component, Fragment } from 'react';
import {
  Button, Row, Col, Form, Input, Select, Radio, AutoComplete, Icon,
} from 'antd';
import { FormContent } from '$pages/components/FormElement';
import { PageDrawer } from '$pages/components/PageLayouts';
import style from './DrawerCreatContacts.module.scss';

const { Option } = Select;
const RadioGroup = Radio.Group;

const Aoption = AutoComplete.Option;
const AoptGroup = AutoComplete.OptGroup;

export default class DrawerCreatContacts extends Component {
  state = {
    visible: false,
  }

  onToggleMore=() => {
    this.setState(prev => ({
      visible: !prev.visible,
    }));
  }

  renderContacts = (data) => {
    if (data instanceof Array && data.length > 0) {
      return (
        data.map((item, index) => (
          <Aoption value={item.number} key={index} className={style.aItem}>
            <div className={style.aItemCont}>
              <span className={style.span}>{item.name}</span>
              <span className={style.span}>{item.number}</span>
            </div>
            <div className={style.aItemCtrl}>
              <a>修改</a>
            </div>
          </Aoption>
        )).concat([
          <Aoption disabled key="creat" className={style.aCtrl}>
            <a>
              <Icon type="plus" />
              创建联系人
            </a>
          </Aoption>,
        ])
      );
    }
    return [];
  }

  render() {
    const { visible, onClose } = this.state;
    const gutter = 15;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const formFullLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 21 },
    };
    return (
      <PageDrawer
        drawerProps={{
          title: '创建联系人',
          visible: true,
          width: '680px',
          // maskClosable: true,
          // onClose: () => { onClose(); },
        }}
        footer={(
          <Fragment>
            <Button>取消</Button>
            <Button type="primary">确定</Button>
          </Fragment>
        )}
      >
        <Form layout="horizontal" className="form-horizontal" {...formItemLayout}>
          <Row gutter={gutter}>
            <Col span={12}>
              <Form.Item label="联系人" required>
                {FormContent({
                  data: (
                    <AutoComplete
                      placeholder="请输入"
                      optionLabelProp="value"
                      dataSource={this.renderContacts([
                        {
                          value: '0',
                          name: '陈于意',
                          number: '13304110605',
                        },
                        {
                          value: '1',
                          name: '陈继会',
                          number: '13304112605',
                        },
                        {
                          value: '2',
                          name: '梁于',
                          number: '13304114605',
                        },
                        {
                          value: '3',
                          name: '钟意',
                          number: '13304155605',
                        },
                      ])}
                    />
                  ),
                })}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="联系人" required>
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="联系电话" required>
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={gutter}>
            <Col span={24}>
              <Form.Item>
                <a onClick={() => { this.onToggleMore(); }}>
                  <span className={`iconfont ${visible ? 'ma-forward' : 'ma-drop-down'}`} />
                  更多信息
                </a>
              </Form.Item>
            </Col>
          </Row>
          <div style={{ display: visible ? 'block' : 'none' }}>
            <Row gutter={gutter}>
              <Col span={12}>
                <Form.Item label="联系人类型">
                  <Select placeholder="请选择">
                    <Option value={0}>0</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="联系人性别">
                  <RadioGroup>
                    <Radio value={1}>男</Radio>
                    <Radio value={2}>女</Radio>
                  </RadioGroup>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={12}>
                <Form.Item label="办公电话">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="家庭电话">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={12}>
                <Form.Item label="QQ号码">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="微博">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={12}>
                <Form.Item label="易信">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="微信">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={24}>
                <Form.Item label="联系单位" {...formFullLayout}>
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={24}>
                <Form.Item label="家庭地址" {...formFullLayout}>
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={24}>
                <Form.Item label="通讯地址" {...formFullLayout}>
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={12}>
                <Form.Item label="邮编">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
          </div>
        </Form>
      </PageDrawer>
    );
  }
}
