import React, { Component } from 'react';
import {
  Button, Table, Input,
} from 'antd';
import {
  PageHead, PageFooter, PageCell,
} from '$pages/components/PageLayouts';
import ClientOrientation from '$pages/components/ClientOrientation';
import HandleCommonInfo from '$pages/container/Handle/HandleCommonInfo'; // 公共信息
import UserInfo from './UserInfo';
import PageData from './const';
import offerData from '$pages/container/Handle/offer'; // 假数据
import style from './Transfer.module.scss';

const { Search } = Input;
const { Column } = PageCell;

export default class Transfer extends Component {
  state = { }

  render() {
    const {
      commonAttr,
    } = offerData.resultObject;
    const columns = [
      {
        key: 'number',
        title: '号码',
        dataIndex: 'number',
      },
      {
        key: 'account',
        title: '原账户',
        dataIndex: 'account',
      },
      {
        key: 'user',
        title: '原使用者',
        dataIndex: 'user',
      },
      {
        key: 'nowuser',
        title: '现使用者',
        width: 300,
        render: () => (
          <Search placeholder="请输入" />
        ),
      },
    ];
    return (
      <div className={style.wrap}>
        <PageHead
          icon={<span className="iconfont ma-handle-hl" />}
          title="过户"
          layout="fixed"
          steps={{
            data: ['订单录入', '结算确认', '收费签字'],
            stepsProps: {
              current: 0,
            },
          }}
        />
        <PageCell className={style.bar}>
          <div className={style.title}>定位目标客户</div>
          <ClientOrientation />
        </PageCell>
        <PageCell className={style.cell}>
          <Column>
            <UserInfo />
          </Column>
        </PageCell>
        <PageCell className={style.cell}>
          <Column>
            <Table
              className={style.table}
              columns={columns}
              dataSource={PageData}
              pagination={false}
              size="middle"
            />
          </Column>
        </PageCell>
        <HandleCommonInfo commonAttr={commonAttr} />
        <PageFooter>
          <Button type="default" size="large">存购物车，办理其它业务</Button>
          <Button size="large" className="btn-warn">填写完成,去结算</Button>
        </PageFooter>
      </div>
    );
  }
}
