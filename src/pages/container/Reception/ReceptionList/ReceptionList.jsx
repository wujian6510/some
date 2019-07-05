import React, { Component, Fragment } from 'react';
import { Tabs, Table, Badge } from 'antd';
import { PageTabs } from '$pages/components/PageLayouts';
import PageData from './const';
import style from './ReceptionList.module.scss';
import PopoverChangePackage from '../PopoverChangePackage';
import OrderInfo from '../OrderInfo';

const { TabPane } = Tabs;

export default class ReceptionList extends Component {
  state = {
    tableDataIndex: '0',
    tableExpandRows: [],
    changeIndex: null,
    changeContainer: null,
  }

  componentDidMount() {
    this.setExpandRows(0);
  }

  setExpandRows = (key) => {
    let expandRows = [];
    if (PageData[key].length > 0) {
      expandRows = PageData[key].map(item => (item.key));
    }
    this.setState({
      tableExpandRows: expandRows,
    });
  }

  onExpandRow = (key) => {
    const { tableExpandRows } = this.state;
    if (tableExpandRows.some(item => (item === key))) {
      this.setState(prev => ({
        tableExpandRows: prev.tableExpandRows.filter(item => (item !== key)),
      }));
    } else {
      this.setState(prev => ({
        tableExpandRows: [
          ...prev.tableExpandRows,
          key,
        ],
      }));
    }
  }

  hoverChange = (key, ev) => {
    const that = this;
    let timer = null;
    if (key === null) {
      timer = setTimeout(() => {
        that.setState({
          changeIndex: null,
          changeContainer: null,
        });
      }, 1000);
      clearTimeout(timer);
    } else {
      that.setState({
        changeIndex: key,
        changeContainer: ev.target,
      });
    }
  }

  render() {
    const {
      tableDataIndex, tableExpandRows, changeIndex, changeContainer,
    } = this.state;
    const columns = [
      {
        key: 'number',
        title: '业务号码',
        dataIndex: 'number',
      },
      {
        key: 'goods',
        title: '产品',
        dataIndex: 'goods',
      },
      {
        key: 'startDate',
        title: '生效时间',
        dataIndex: 'startDate',
      },
      {
        key: 'endDate',
        title: '失效时间',
        dataIndex: 'endDate',
      },
      {
        key: 'state',
        title: '状态',
        dataIndex: 'state',
        render: (node) => {
          switch (node) {
            case '正常':
              return <Badge status="success" text={node} />;
            case '欠费停机':
              return <Badge status="error" text={node} />;
            default:
              return node;
          }
        },
      },
      {
        key: 'ctrl',
        title: '操作',
        render: () => (
          <PopoverChangePackage>
            <a>变更</a>
          </PopoverChangePackage>
        ),
      },
    ];
    return (
      <Fragment>
        <PageTabs
          defaultActiveKey="1"
          // activeKey={tableDataIndex}
          className={style.tabs}
          onChange={
            (key) => {
              this.setExpandRows(key);
              this.setState({
                tableDataIndex: key,
              });
            }
          }
        >
          <TabPane tab={`全部套餐(${PageData[0].length})`} key="0">
            <Table
              columns={columns}
              dataSource={PageData[tableDataIndex]}
              className={style.table}
              expandedRowKeys={tableExpandRows}
              onExpand={(e, r) => {
                this.onExpandRow(r.key);
              }}
              size="small"
            />
          </TabPane>
          <TabPane tab={`订单信息(${PageData[1].length})`} key="1">
            <OrderInfo />
          </TabPane>
          <TabPane tab="使用者一证五号" key="2" />
        </PageTabs>
      </Fragment>
    );
  }
}
