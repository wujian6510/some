import React, { Component } from 'react';
import {
  Popover, Card, Input, Table,
} from 'antd';
import style from './NumberPopover.module.scss';
import { PageData } from './const';

const { Search } = Input;

export default class NumberPopover extends Component {
  state = { }

  renderSelectPopover = () => {
    const columns = [
      {
        title: '销售品',
        key: 'name',
        width: '70%',
        dataIndex: 'name',
      },
      {
        title: '业务号码',
        width: '30%',
        key: 'number',
        dataIndex: 'number',
      },
    ];
    return (
      <Card
        bordered={false}
        title="在用号码"
        extra={<Search placeholder="号码定位" />}
      >
        <Table
          columns={columns}
          dataSource={PageData}
          size="middle"
          pagination={false}
          scroll={{
            y: 300,
          }}
        />
      </Card>
    );
  }

  render() {
    const { children } = this.props;
    return (
      <Popover
        content={this.renderSelectPopover()}
        trigger="click"
        overlayClassName={style.wrap}
      >
        {children}
      </Popover>
    );
  }
}
