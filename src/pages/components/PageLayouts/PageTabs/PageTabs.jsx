import React, { Component } from 'react';
import { Tabs } from 'antd';
import classnames from 'classnames';
import style from './PageTabs.module.scss';

const { TabPane } = Tabs;

export default class PageTabs extends Component {
  render() {
    const { className, children } = this.props;
    return (
      <Tabs
        {...this.props}
        animated={false}
        className={classnames(style.tabs, className)}
      >
        {children}
      </Tabs>
    );
  }
}

PageTabs.TabCell = TabPane;
