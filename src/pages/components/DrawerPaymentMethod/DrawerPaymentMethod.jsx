import React, { Component, Fragment } from 'react';
import {
  Table, Form, Radio, Select, Input, Row, Col, Button,
} from 'antd';
import { PageDrawer } from '$pages/components/PageLayouts';
import TableData from './const';
import style from './DrawerPaymentMethod.module.scss';

export default class DrawerPaymentMethod extends Component {
  state = { }

  render() {
    const { visible, onClose } = this.props;
    const gutter = 15;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    const columns = [
      {
        title: '订单',
        key: 'id',
        dataIndex: 'id',
      },
      {
        title: '业务号码',
        key: 'number',
        dataIndex: 'number',
      },
      {
        title: '费用项',
        key: 'costType',
        dataIndex: 'costType',
      },
      {
        title: '标准费用',
        key: 'cost',
        dataIndex: 'cost',
      },
      {
        title: '支付方式',
        key: 'type',
        dataIndex: 'type',
      },
    ];
    return (
      <PageDrawer
        drawerProps={{
          title: '设置支付方式',
          visible,
          width: '1000px',
          maskClosable: true,
          onClose: () => { onClose(); },
        }}
        footer={(
          <Fragment>
            <Button>取消</Button>
            <Button type="primary">保存</Button>
          </Fragment>
        )}
      >
        <Table
          columns={columns}
          dataSource={TableData}
          className={style.table}
          rowSelection={{}}
          size="middle"
        />
        <div className={style.panel}>
          <div className={style.title}>收费环节</div>
          <Radio.Group>
            <Radio value="0">营业收费</Radio>
            <Radio value="1">施工过程收费</Radio>
          </Radio.Group>
        </div>
        <div className={style.panel}>
          <div className={style.title}>支付模式</div>
          <Radio.Group>
            <Radio value="0">营业现场支付</Radio>
            <Radio value="1">在线支付</Radio>
          </Radio.Group>
        </div>
        <div className={style.panel}>
          <div className={style.title}>支付方式</div>
          <Form layout="horizontal" className="form-horizontal" {...formItemLayout}>
            <Row gutter={gutter}>
              <Col span={12}>
                <Form.Item label="支付方式">
                  <Select placeholder="请输入">
                    <Select.Option value="0">0</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="客户名称">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={12}>
                <Form.Item label="开户银行">
                  <Select placeholder="请输入">
                    <Select.Option value="0">0</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="开户名称">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={12}>
                <Form.Item label="银行账号">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="储蓄卡号">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col span={12}>
                <Form.Item label="代缴电话">
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="POS交易流水号">
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
