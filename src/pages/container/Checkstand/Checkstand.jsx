import React, { Component, Fragment } from 'react';
import {
  Table, Button,
} from 'antd';
import { PageHead } from '$pages/components/PageLayouts';
import { DrawerInvoice, DrawerChargesDetails } from '$pages/container/Drawer';
import { TreeData } from './const';
import style from './Checkstand.module.scss';

export default class Checkstand extends Component {
  state = {
    invoiceVisible: false,
    tableKeyReg: /\d+-\d+/,
    selectedRows: [],
  }

  renderContent = (value, row, index) => {
    const { tableKeyReg } = this.state;
    const obj = {
      children: value,
      props: {},
    };
    if (!tableKeyReg.test(row.key)) {
      obj.props.colSpan = 0;
    }
    return obj;
  }

  onToggleInvoice = () => {
    this.setState(prev => ({
      invoiceVisible: !prev.invoiceVisible,
    }));
  }

  render() {
    const { invoiceVisible } = this.state;
    const columns = [
      {
        title: '订单',
        dataIndex: 'number',
        key: 'number',
        render: (value, row, index) => {
          const { tableKeyReg } = this.state;
          if (tableKeyReg.test(row.key)) {
            return value;
          }
          return {
            children: (
              <div className={style.bar}>
                <div className={style.barMain}>
                  <div className={style.barTit}>
                    {`客户订单号：${row.number}`}
                  </div>
                  <span className={style.span}>{row.name}</span>
                  <span className={style.span}>{`订单金额：￥${row.cost}`}</span>
                </div>
                <div className={style.barCtrl}>
                  <a>批量受理</a>
                </div>
              </div>
            ),
            props: {
              colSpan: columns.length,
            },
          };
        },
      },
      {
        title: '业务号码',
        dataIndex: 'id',
        key: 'id',
        render: this.renderContent,
      },
      {
        title: '费用项',
        dataIndex: 'costClass',
        key: 'costClass',
        render: this.renderContent,
      },
      {
        title: '标准费用',
        dataIndex: 'standardCost',
        key: 'standardCost',
        render: this.renderContent,
      },
      {
        title: '优惠费用',
        dataIndex: 'discount',
        key: 'discount',
        render: this.renderContent,
      },
      {
        title: '特批费用',
        dataIndex: 'specialCost',
        key: 'specialCost',
        render: this.renderContent,
      },
      {
        title: '税金(税率)',
        dataIndex: 'taxRate',
        key: 'taxRate',
        render: this.renderContent,
      },
      {
        title: '支付方式',
        dataIndex: 'type',
        key: 'type',
        align: 'right',
        render: this.renderContent,
      },
    ];
    const { selectedRows } = this.state;
    return (
      <div className={style.wrap}>
        <div className={style.container}>
          <PageHead
            icon={<span className="iconfont ma-order-nor" />}
            title="订单提交成功"
            layout="fixed"
            steps={{
              data: ['订单录入', '结算确认', '收费签字'],
              stepsProps: {
                current: 2,
              },
            }}
          />
          <div className={style.order}>
            <Table
              columns={columns}
              dataSource={TreeData}
              className={style.table}
              rowSelection={{
                selectedRowKeys: selectedRows,
                onSelectAll: (selected, Rows) => {
                  this.setState({
                    selectedRows: Rows.map(item => (item.key)),
                  });
                },
                onSelect: (record) => {
                  const { tableKeyReg } = this.state;
                  const AllTableKeys = TreeData.map(item => (item.key));
                  const reg = new RegExp(`${record.key}-\\d`);
                  if (!tableKeyReg.test(record.key)) {
                    if (selectedRows.indexOf(record.key) !== -1) {
                      this.setState(prev => ({
                        selectedRows: prev.selectedRows.filter(item => !((item === record.key) || reg.test(item))),
                      }));
                    } else {
                      this.setState(prev => ({
                        selectedRows: [
                          ...prev.selectedRows,
                          record.key,
                          ...AllTableKeys.filter(item => (reg.test(item))),
                        ],
                      }));
                    }
                  } else if (tableKeyReg.test(record.key)) {
                    if (selectedRows.indexOf(record.key) !== -1) {
                      this.setState(prev => ({
                        selectedRows: prev.selectedRows.filter(item => (item !== record.key)),
                      }));
                    } else {
                      this.setState(prev => ({
                        selectedRows: [
                          ...prev.selectedRows,
                          record.key,
                        ],
                      }));
                    }
                  }
                },
              }}
              pagination={false}
              rowClassName={(record) => {
                const { tableKeyReg } = this.state;
                if (!tableKeyReg.test(record.key)) {
                  return style.parents;
                }
                return null;
              }}
              footer={() => (
                <Fragment>
                  <Button type="button">生成费用</Button>
                  <Button type="button">特批</Button>
                  <Button type="button">设置支付方式</Button>
                </Fragment>
              )}
              size="middle"
            />
          </div>
          <div className={style.column}>
            <dl>
              <dt>支付方式</dt>
              <dd className={style.dd}>
                <div className={style.total}>
                  <div className={style.span}>
                    总金额：
                    <span className="text-danger">￥399.00</span>
                  </div>
                  <div className={style.span}>
                    减免：
                    <span className="text-danger">￥19.00</span>
                  </div>
                  <div className={style.span}>
                    应收：
                    <span className="text-danger">￥380.00</span>
                  </div>
                </div>
              </dd>
              <dd className={style.ft}>
                <a>收费明细</a>
                <Button
                  htmlType="button"
                  type="primary"
                >
                  收费
                </Button>
              </dd>
            </dl>
            <dl>
              <dt>发票信息</dt>
              <dd className={style.dd}>
                <span className={style.span}>发票类型：个人</span>
                <span className={style.span}>发票内容：商品明细</span>
              </dd>
              <dd className={style.ft}>
                <span className="text-danger">请仔细核对电子发票信息</span>
                <a>修改发票信息</a>
                <Button
                  htmlType="button"
                  type="default"
                  onClick={() => { this.onToggleInvoice(); }}
                >
                  打印发票
                </Button>
              </dd>
            </dl>
          </div>
          <div className={style.footer}>
            <Button onClick={() => { this.props.history.push('/handle'); }} htmlType="button">取消订单</Button>
            <Button htmlType="button">免填单预览</Button>
            <Button htmlType="button">拍照留存</Button>
            <Button onClick={() => { this.props.history.push('/reception'); }} htmlType="button" className="btn-warn">受理完成</Button>
          </div>
        </div>
        <DrawerInvoice visible={invoiceVisible} onClose={this.onToggleInvoice} />
        <DrawerChargesDetails />
      </div>
    );
  }
}
