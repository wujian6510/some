import React, { Component, Fragment } from 'react';
import {
  Tabs, Popover, Button, Table, Input,
} from 'antd';
import LittlePaging from '$pages/components/LittlePaging';
import { PageData } from './const';
import { PageDrawer, PageTabs } from '$pages/components/PageLayouts';
import style from './DrawerPackage.module.scss';

const { TabPane } = Tabs;
const { Search } = Input;

export default class DrawerPackage extends Component {
  renderCtrl = item => (
    <div className={style.ctrl}>
      <a>
        <span className="iconfont ma-buy" />
        办理
      </a>
      <a>
        <span
          className={
            (typeof item.collection === 'boolean' && item.collection) ?
              'iconfont ma-collection-on' : 'iconfont ma-collection-off'
          }
        />


        收藏
      </a>
      <Popover
        title="资费说明"
        content={typeof item.content === 'string' ? item.content : ''}
        trigger="hover"
        placement="rightBottom"
        arrowPointAtCenter
        overlayClassName={style.popover}
      >
        <a>
          <span className="iconfont ma-info" />


          描述
        </a>
      </Popover>
    </div>
  )

  render() {
    const { visible, onClose } = this.props;
    const columns = [
      {
        title: '排名',
        key: 'number',
        render: (a, b, index) => index + 1,
      },
      {
        title: '销售品类型',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: '销售品名称',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '操作',
        key: 'ctrl',
        render: text => this.renderCtrl(text),
      },
    ];
    return (
      <PageDrawer
        drawerProps={{
          title: '选套餐',
          visible,
          width: '1000px',
          maskClosable: true,
          onClose: () => { onClose(); },
        }}
        bodyClass={style.drawerBody}
        footer={(
          <Fragment>
            <Button onClick={() => { onClose(); }}>取消</Button>
            <Button type="primary">确定</Button>
          </Fragment>
        )}
      >
        <PageTabs
          defaultActiveKey="0"
          className={style.tabs}
          tabBarExtraContent={(
            <Fragment>
              <Search placeholder="搜一搜" className={style.search} />
              <LittlePaging />
            </Fragment>
          )}
        >
          <TabPane tab="热卖" key="0">
            <Table columns={columns} dataSource={PageData} size="middle" />
          </TabPane>
          <TabPane tab="收藏" key="1">
            <Table columns={columns} dataSource={PageData} size="middle" />
          </TabPane>
          <TabPane tab="合同" key="2">
            <Table columns={columns} dataSource={PageData} size="middle" />
          </TabPane>
          <TabPane tab="搜索结果" key="3">
            <Table columns={columns} dataSource={PageData} size="middle" />
          </TabPane>
        </PageTabs>
      </PageDrawer>
    );
  }
}
