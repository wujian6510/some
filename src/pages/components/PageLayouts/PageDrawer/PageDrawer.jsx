import React, { Component } from 'react';
import {
  Drawer,
} from 'antd';
import classnames from 'classnames';
import style from './PageDrawer.module.scss';

export default class PageDrawer extends Component {
  renderFooter = (node) => {
    if (
      typeof node === 'string' ||
      React.isValidElement(node)
    ) {
      return (
        <div className={style.footer}>
          {node}
        </div>
      );
    }
    return '';
  }

  render() {
    const {
      drawerProps, children, footer, bodyClass,
    } = this.props;
    return (
      <Drawer
        className={style.wrap}
        {...drawerProps}
      >
        <div className={classnames(style.body, bodyClass)}>
          {children}
        </div>
        {this.renderFooter(footer)}
      </Drawer>
    );
  }
}
