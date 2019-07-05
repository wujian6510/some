import React, { Component, Fragment } from 'react';
import {
  Table, Divider, Dropdown, Menu,
} from 'antd';
import PageData from './const';
import style from './OrderInfo.module.scss';

const tableKeyReg = /\d+-\d+/;

export default class OrderInfo extends Component {
  state = { }

  moreMenu = () => (
    <Menu>
      <Menu.Item>撤单</Menu.Item>
      <Menu.Item>修正</Menu.Item>
      <Menu.Item>竣工</Menu.Item>
    </Menu>
  )

  renderContent = (attr, type) => {
    const obj = {
      children: attr.value,
      props: {},
    };
    if (!tableKeyReg.test(attr.row.key)) {
      obj.props.colSpan = 0;
    }
    if (attr.value) {
      switch (type) {
        case 'info':
          obj.children = (
            <Fragment>
              <div>{attr.value.id}</div>
              <div>{attr.value.order}</div>
            </Fragment>
          );
          break;
        case 'cost':
          obj.children = (
            <Fragment>
              <div className="text-strong">{attr.value.number}</div>
              <div>{attr.value.state}</div>
            </Fragment>
          );
          break;
        case 'state':
          obj.children = (
            <Fragment>
              <div className={style.strong}>{attr.value.state}</div>
              <div>{attr.value.phase}</div>
            </Fragment>
          );
          break;
        case 'ctrl':
          obj.children = (
            <Fragment>
              <a>收费</a>
              <Divider type="vertical" />
              <Dropdown overlay={this.moreMenu}>
                <a>更多</a>
              </Dropdown>
            </Fragment>
          );
          break;
        default:
          break;
      }
    }
    return obj;
  }

  render() {
    const columns = [
      {
        key: 'info',
        title: '订单详情',
        dataIndex: 'info',
        width: '40%',
        render: (value, row) => {
          if (tableKeyReg.test(row.key)) {
            return {
              children: (
                <div className={style.info}>
                  <div><a>{value.id}</a></div>
                  <div>{value.order}</div>
                </div>
              ),
              props: {
                className: style.firstTd,
              },
            };
          }
          return {
            children: (
              <div className={style.bar}>
                <span>{row.id}</span>
                <span>{row.name}</span>
                <span>{row.address}</span>
              </div>
            ),
            props: {
              colSpan: columns.length,
            },
          };
        },
      },
      {
        key: 'cost',
        title: '订单金额',
        dataIndex: 'cost',
        render: (value, row, index) => (this.renderContent({ value, row, index }, 'cost')),
      },
      {
        key: 'state',
        title: '订单状态',
        dataIndex: 'state',
        render: (value, row, index) => (this.renderContent({ value, row, index }, 'state')),
      },
      {
        key: 'date',
        title: '受理时间',
        dataIndex: 'date',
        render: (value, row, index) => (this.renderContent({ value, row, index })),
      },
      {
        key: 'ctrl',
        title: '操作',
        render: (value, row, index) => (this.renderContent({ value, row, index }, 'ctrl')),
      },
    ];
    return (
      <Table
        columns={columns}
        dataSource={PageData}
        className={style.table}
        defaultExpandAllRows
        size="small"
      />
    );
  }
}
