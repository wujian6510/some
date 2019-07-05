import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Input, Select, Button, AutoComplete,
} from 'antd';
import classnames from 'classnames';
import style from './ClientOrientation.module.scss';

const { Option } = Select;

class ClientOrientation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTypes: [],
    };
  }

  render() {
    const { className } = this.props;
    const { searchTypes } = this.state;
    return (
      <div className={classnames(style.main, className)}>
        <div className={style.group}>
          <Select defaultValue="简单搜索" className={style.select} onSelect={this.handleTypeSelect}>
            {
              searchTypes.map(t => (<Option key={t.attrValue} value={t.attrValue}>{t.attrValueDesc}</Option>))
            }
          </Select>
          <AutoComplete
            dropdownMatchSelectWidth={false}
            className={style.input}
            dataSource={[]}
            placeholder="搜索客户名称、客户号码、证件号码"
            onSearch={this.handleSearch}
            optionLabelProp="value"
          />
          <Button type="primary">搜客户</Button>
        </div>
        <Button className={classnames(style.btn, 'btn-warn')}>读取身份证</Button>
        <Button
          className={style.btn}
        >
            新建客户
        </Button>
        <Button
          className={style.btn}
        >
            资源预判
        </Button>
      </div>
    );
  }
}

export default connect(store => ({
  cust: store.cust,
  attrs: store.attrs,
}))(ClientOrientation);
