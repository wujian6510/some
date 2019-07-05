import React, { Component, Fragment } from 'react';
import {
  Table, Alert, Radio, Form,
} from 'antd';
import {
  PageCell, PagePanel,
} from '$pages/components/PageLayouts';
import style from './UnsubscribeList.module.scss';

const { Column } = PageCell;
const Data = [
  {
    key: '1',
    name: '[91区]4K超高清宽带电视免费套餐V2',
    number: '',
  },
  {
    key: '2',
    name: '天翼宽带(有线)',
    number: '077120190320',
  },
  {
    key: '3',
    name: '高清IPTV',
    number: 'IPTV077120190320',
  },

];

export default class UnsubscribeList extends Component {
  state = { }

  render() {
    const Columns = [
      {
        key: 'name',
        title: '销售品/产品名称',
        dataIndex: 'name',
      },
      {
        key: 'number',
        title: '业务号码/账号',
        dataIndex: 'number',
      },
    ];
    return (
      <PagePanel title="退订销售品列表" size="large">
        <PageCell>
          <Column>
            <Form layout="inline" className={style.head}>
              <Form.Item label="失效方式">
                <Radio.Group name="radiogroup" defaultValue={1}>
                  <Radio value={1}>当月有效</Radio>
                  <Radio value={2}>次月有效</Radio>
                </Radio.Group>
              </Form.Item>
            </Form>
            <Table
              columns={Columns}
              dataSource={Data}
              pagination={false}
              size="middle"
              className="none-border"
            />
            <Alert
              message="提示信息"
              className={style.info}
              description={
                (
                  <Fragment>
                    <p>1.当前退订的套餐【&#91区]201706自主版/天翼畅享99元/50M宽带免费】存在依赖的套餐【天翼畅享40GB套餐_国内_ 99元(升级) ; &#91区]201704天翼宽带(有线)包月资费(50M)_ 90元/月】</p>
                    <p>2.VIP会员客户，请注意挽留！</p>
                    <p>3.号码【189771694921】是否进行预约拆机?</p>
                    <p>4.号码【07710001849】是否进行预约拆机?</p>
                    <p>5.当前订单【注销】销售品【天翼畅享40GB套餐_国内_99元(升级) 】为流量不清零销售品。</p>
                  </Fragment>
                )
              }
              type="info"
            />
          </Column>
        </PageCell>
      </PagePanel>
    );
  }
}
