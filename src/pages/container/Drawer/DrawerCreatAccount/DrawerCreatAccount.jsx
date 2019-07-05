import React, { Component, Fragment } from 'react';
import {
  Button, Row, Col, Form, Input, Select,
} from 'antd';
import CheckTiles from '$pages/components/CheckTiles';
import { PageDrawer } from '$pages/components/PageLayouts';
import style from './DrawerCreatAccount.module.scss';

import AttrSelectPanel from '$pages/components/SwitchAttr/AttrSelectPanel';

const { Option } = Select;

export default class DrawerCreatAccount extends Component {
  state = {
    visible: false,
  }

  onToggleMore=() => {
    this.setState(prev => ({
      visible: !prev.visible,
    }));
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
          title: '新建账户',
          visible,
          width: '680px',
          maskClosable: true,
          onClose: () => { onClose(); },
        }}
        footer={(
          <Fragment>
            <Button>取消</Button>
            <Button type="primary">确定</Button>
          </Fragment>
        )}
      >
        <div className={style.group}>
          <Form layout="horizontal" className="form-horizontal" {...formItemLayout}>
            <Row gutter={gutter}>
              <Col span={12}>
                <Form.Item label="账户名称" required>
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="收费省" required>
                  <Select placeholder="请选择">
                    <Option value={0}>0</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={24}>
                <Form.Item>
                  <a onClick={() => { this.onToggleMore(); }}>
                    <span className={`iconfont ${visible ? 'ma-forward' : 'ma-drop-down'}`} />
                    {visible ? '更多信息' : '收起'}
                  </a>
                </Form.Item>
              </Col>
            </Row>
            <div style={{ display: visible ? 'block' : 'none' }}>
              <Row gutter={gutter}>
                <Col span={12}>
                  <Form.Item label="投递方式">
                    <Select placeholder="请选择">
                      <Option value={0}>0</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={gutter}>
                <Col span={12}>
                  <Form.Item label="收件人">
                    <Input placeholder="请输入" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="收件人电话">
                    <Input placeholder="请输入" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={gutter}>
                <Col span={24}>
                  <Form.Item label="邮件地址" {...formFullLayout}>
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
              <Row gutter={gutter}>
                <Col span={24}>
                  <Form.Item label="账户地址" {...formFullLayout}>
                    <Input placeholder="请输入" />
                  </Form.Item>
                </Col>
              </Row>
            </div>
          </Form>
        </div>
        <div className={style.group}>
          <div className={style.title}>支付方案</div>
          <Form layout="horizontal" className="form-horizontal" {...formItemLayout}>
            <Row>
              <Col span={24}>
                <Form.Item>
                  <CheckTiles
                    layout="inline"
                    type="radio"
                    data={[
                      {
                        label: '现金',
                        value: '0',
                      },
                      {
                        label: '银行托收',
                        value: '1',
                      },
                      {
                        label: '电子钱包',
                        value: '2',
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={12}>
                <Form.Item label="开户银行">
                  <AttrSelectPanel
                    type="ASB"
                    attr={{
                      attrValueTypeId: 'ASB',
                      fieldName: 'acct_id',
                      isEdit: 'T',
                      isNull: 'F',
                      orderId: '4',
                      valueDesc: 'null',
                    }}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="银行账户">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={12}>
                <Form.Item label="结算户名">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="缴费方式">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </PageDrawer>
    );
  }
}
