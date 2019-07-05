import React, { Component } from 'react';
import { Tabs, Empty, Button } from 'antd';
import { PageHead, PageFooter, PageTabs } from '$pages/components/PageLayouts';
import style from './UserInfoEdit.module.scss';

import BaseInfo from './BaseInfo'; // 基础信息
import Contacts from './Contacts'; // 联系人
import ManageEvaluate from './ManageEvaluate'; // 管理评价
import ExtendInfo from './ExtendInfo'; // 扩展信息
import Taxpayer from './Taxpayer'; // 纳税人

const { TabPane } = Tabs;

export default class UserInfoEdit extends Component {
  state = {
    activeKey: '1',
  }

  renderContent = () => {
    const { activeKey } = this.state;
    switch (activeKey) {
      case '1':
        return <BaseInfo />;
      case '2':
        return <Contacts />;
      case '3':
        return <ManageEvaluate />;
      case '4':
        return <ExtendInfo />;
      case '5':
        return <Taxpayer />;
      default:
        return <Empty />;
    }
  }

  render() {
    return (
      <div className={style.wrap}>
        <PageHead
          icon={<span className="iconfont ma-custer-hl" />}
          layout="fixed"
          title="修改资料"
          className={style.head}
        >
          <PageTabs
            defaultActiveKey="1"
            className={style.tabs}
            onChange={(key) => {
              this.setState({
                activeKey: key,
              });
            }}
          >
            <TabPane tab="基础信息" key="1" />
            <TabPane tab="联系人信息" key="2" />
            <TabPane tab="管理评价" key="3" />
            <TabPane tab="扩展信息" key="4" />
            <TabPane tab="纳税人" key="5" />
          </PageTabs>
        </PageHead>
        {this.renderContent()}
        <PageFooter>
          <Button>取消</Button>
          <Button className="btn-warn">保存</Button>
        </PageFooter>
      </div>
    );
  }
}
