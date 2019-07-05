import React, { Component, Fragment } from 'react';
import {
  Modal, Form, Input, Alert, Steps,
} from 'antd';
import CheckTiles from '$pages/components/CheckTiles';
import style from './Recharge.module.scss';

const { Step } = Steps;

export default class Recharge extends Component {
  state = { }

  render() {
    return (
      <Modal
        title="充值缴费"
        width={400}
        visible
        closable={false}
        className={style.modal}
        okText="前往收银台"
      >
        <Steps size="small" current={0} className={style.steps}>
          <Step title="填写信息" />
          <Step title="收银台" />
          <Step title="充值完成" />
        </Steps>
        <Form layout="horizontal" className={style.form}>
          <Form.Item label="充值号码">
            <div className={style.section}>
              <Input />
            </div>
            <div className={style.section}>
              <div className={style.span}>
                账户余额：
                <span className="text-strong">0.00</span>
                元
              </div>
              <div className={style.span}>
                欠费金额：
                <span className="text-strong">-31.71</span>
                元
              </div>
            </div>
          </Form.Item>
          <Form.Item label="充值金额">
            <div className={style.section}><Input /></div>
            <div className={style.section}>
              <CheckTiles
                type="radio"
                gridSpan={6}
                data={[
                  {
                    label: '10元',
                    value: 10,
                  },
                  {
                    label: '20元',
                    value: 20,
                  },
                  {
                    label: '50元',
                    value: 50,
                  },
                  {
                    label: '100元',
                    value: 100,
                  },
                  {
                    label: '200元',
                    value: 200,
                  },
                  {
                    label: '300元',
                    value: 300,
                  },
                  {
                    label: '500元',
                    value: 500,
                  },
                  {
                    label: '1000元',
                    value: 1000,
                  },
                  {
                    label: '2000元',
                    value: 2000,
                  },
                  {
                    label: '缴清欠费',
                    value: 'all',
                  },
                ]}
              />
            </div>
            <Alert message="请仔细核对充值信息，充值金额无法退款" type="warning" showIcon />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
