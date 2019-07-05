import React, { Component, Fragment } from 'react';
import {
  Button, Row, Col, Form, Input, Select, Empty, Tag, Radio,
} from 'antd';
import { PagePanel } from '$pages/components/PageLayouts';
import LittlePaging from '$pages/components/LittlePaging';
import style from './Contacts.module.scss';

const { Option } = Select;
const InputGroup = Input.Group;
const { Search } = Input;

export default class Contacts extends Component {
  state = { }

  renderItems = (items) => {
    if (items instanceof Array && items.length > 0) {
      return (
        <ul className={style.list}>
          {
            items.map((item, i) => (
              <li className={style.item} key={i}>
                <div className={style.itemCont}>{item.label}</div>
                <div className={style.itemExtra}>
                  <Button size="small">修改</Button>
                  <Button size="small">删除</Button>
                </div>
              </li>
            ))
          }
        </ul>
      );
    }
    return <Empty />;
  }

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
    const data = new Array(10).fill({
      label: '陆敏 19082317723',
    });
    return (
      <div className={style.wrap}>
        <div className={style.contacts}>
          <PagePanel
            title="联系人列表"
            className={style.panel}
            footer={(
              <div className="text-center">
                <a>
                  <span className="iconfont ma-plus" />
                  创建新联系人
                </a>
              </div>
            )}
          >
            {this.renderItems(data)}
          </PagePanel>
        </div>
        <div className={style.details}>
          <PagePanel
            title="联系人列表"
            className={style.panel}
          >
            <Form layout="horizontal" className="form" {...formItemLayout}>
              <Row gutter={gutter}>
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
                <Col span={12}>
                  <Form.Item label="联系人类型">
                    <Input placeholder="请输入" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="联系人性别">
                    <Radio.Group>
                      <Radio value={1}>男</Radio>
                      <Radio value={2}>女</Radio>
                    </Radio.Group>
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
                  <Form.Item label="联系描述" {...formTwoLayout}>
                    <Input placeholder="请输入" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={gutter}>
                <Col span={24}>
                  <Form.Item label="联系单位" {...formTwoLayout}>
                    <Input placeholder="请输入" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={gutter}>
                <Col span={24}>
                  <Form.Item label="家庭住址" {...formTwoLayout}>
                    <Input placeholder="请输入" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={gutter}>
                <Col span={24}>
                  <Form.Item label="通信地址" {...formTwoLayout}>
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
            </Form>
          </PagePanel>
        </div>
      </div>
    );
  }
}
