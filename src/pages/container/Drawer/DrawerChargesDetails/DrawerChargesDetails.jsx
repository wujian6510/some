import React, { Component, Fragment } from 'react';
import {
  Row, Col, Button, Form, Input, Switch,
} from 'antd';
import { PageDrawer } from '$pages/components/PageLayouts';
import style from './DrawerChargesDetails.module.scss';

export default class DrawerChargesDetails extends Component {
  state = { }

  render() {
    const formItemLayout = {
      labelCol: { span: 12 },
      wrapperCol: { span: 12 },
    };
    const { visible, onClose } = this.props;
    return (
      <PageDrawer
        drawerProps={{
          title: '收费明细',
          visible,
          width: '480px',
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
        <Form layout="horizontal" {...formItemLayout}>
          <div className={style.group}>
            <Form.Item label="POS刷卡金额">￥0.00</Form.Item>
            <Form.Item label="支票金额">￥0.00</Form.Item>
            <Form.Item label="实收现金金额">￥100.00</Form.Item>
            <Form.Item label="银行回执号">
              <Input placeholder="输入回执号" />
            </Form.Item>
          </div>
          <div className={style.group}>
            <Form.Item label="支取计费费用">
              <div className="text-right">
                <Switch defaultChecked />
              </div>
            </Form.Item>
            <Form.Item label="可支取金额">￥100.00</Form.Item>
            <Form.Item label="用户补缴金额">
              <Input placeholder="输入回执号" addonBefore="￥" />
            </Form.Item>
          </div>
          <div className={style.group}>
            <Form.Item label="实收金额">
              <span className={style.strong}>
                ￥299.00
              </span>
            </Form.Item>
            <Form.Item label="应找金额">￥0.00</Form.Item>
          </div>
        </Form>
      </PageDrawer>
    );
  }
}
