import React, { Component, Fragment } from 'react';
import {
  Table, Button, Input, Select,
} from 'antd';
import { PageDrawer, PagePanel } from '$pages/components/PageLayouts';
import PageData from './const';

const { TextArea } = Input;

export default class DrawerSpecialApproval extends Component {
  state = { }

  renderModeMenu = () => (
    <Select placeholder="请选择" style={{ width: '100%' }}>
      <Select.Option value="0">打折</Select.Option>
      <Select.Option value="1">减免</Select.Option>
      <Select.Option value="2">实收</Select.Option>
    </Select>
  )

  render() {
    const { visible, onClose } = this.props;
    const columns = [
      {
        title: '订单项编号',
        key: 'id',
        dataIndex: 'id',
      },
      {
        title: '费用名称',
        key: 'name',
        dataIndex: 'name',
      },
      {
        title: '业务类型',
        key: 'type',
        dataIndex: 'type',
      },
      {
        title: '标准费用',
        key: 'standardCost',
        dataIndex: 'standardCost',
      },
      {
        title: '优惠费用',
        key: 'discount',
        dataIndex: 'discount',
      },
      {
        title: '应收费用',
        key: 'totalCost',
        dataIndex: 'totalCost',
      },
      {
        title: '实收费用',
        key: 'actualCost',
        dataIndex: 'actualCost',
      },
      {
        title: '特批模式',
        key: 'mode',
        width: 120,
        render: () => this.renderModeMenu(),
      },
      {
        title: '特批度限额',
        key: 'maxQuota',
        dataIndex: 'maxQuota',
      },
      {
        title: '特批度',
        key: 'quota',
        width: 120,
        render: () => <Input placeholder="请输入" />,
      },
    ];
    return (
      <PageDrawer
        drawerProps={{
          title: '特批',
          visible,
          width: '1000px',
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
        <PagePanel>
          <Table columns={columns} dataSource={PageData} size="middle" rowSelection={{}} />
        </PagePanel>
        <PagePanel title="审批意见">
          <TextArea rows={3} style={{ maxWidth: '560px' }} />
        </PagePanel>
      </PageDrawer>

    );
  }
}
