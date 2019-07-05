import React, { Component, Fragment } from 'react';
import {
  Input, Table, Radio,
} from 'antd';
import {
  PageCell, PagePanel,
} from '$pages/components/PageLayouts';
import style from './FreeUser.module.scss';

const { Column } = PageCell;
const { Search } = Input;

const TableData = [
  {
    key: 1,
    title: '天翼手机：18007710003（副，免）',
  },
  {
    key: 2,
    title: '天翼宽带：077120190320（4M）赠送终端',
  },
  {
    key: 3,
    title: 'IPTV：IPTV077120190320（高清IPTV）',
  },
  {
    key: 4,
    title: '天翼宽带：077120190320（4M）赠送终端',
  },
];

export default class FreeUser extends Component {
  state = { }

  render() {
    const columns = [
      {
        key: 'title',
        title: '号码',
        width: '50%',
        dataIndex: 'title',
      },
      {
        key: 'ctrl',
        title: '操作',
        width: '50%',
        render: () => (
          <div className={style.group}>
            <Radio.Group>
              <Radio value={1}>拆机</Radio>
              <Radio value={2}>加入新套餐</Radio>
            </Radio.Group>
            <div className={style.cont}>
              <Search placeholder="请输入" />
            </div>
          </div>
        ),
      },
    ];
    return (
      <PagePanel title="游离用户" size="large">
        <PageCell>
          <Column>
            <Table
              className={style.table}
              columns={columns}
              dataSource={TableData}
              pagination={false}
              size="middle"
            />
          </Column>
        </PageCell>
      </PagePanel>
    );
  }
}
