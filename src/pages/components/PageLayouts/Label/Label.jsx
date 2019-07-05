import React, { Component } from 'react';
import { Tag } from 'antd';

const theme = {
  primaryColor: '#4477EE',
  successColor: '#33BB66',
  dangerColor: '#FF6666',
  warningColor: '#FFBB00',
  infoColor: '#7788AA',
};

export default class Label extends Component {
  renderLabel = (type, node, tagProps) => {
    if (typeof type === 'string' && tagProps instanceof Object) {
      return <Tag color={theme[`${type}Color`]} {...tagProps}>{node}</Tag>;
    }
    if (typeof type === 'string') {
      return <Tag color={theme[`${type}Color`]}>{node}</Tag>;
    }
    if (tagProps instanceof Object) {
      return <Tag {...tagProps}>{node}</Tag>;
    }

    return <Tag>{node}</Tag>;
  }

  render() {
    const { type, children, tagProps } = this.props;
    return this.renderLabel(type, children, tagProps);
  }
}
