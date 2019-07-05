import React, { Component, Fragment } from 'react';
import { Form, Input, Button } from 'antd';
import { Label } from '$pages/components/PageLayouts';
import style from './UserInfo.module.scss';

const { Search } = Input;

export default class UserInfo extends Component {
  state = { }

  render() {
    return (
      <div className={style.main}>
        <div className={style.head}>
          <span className={style.name}>张灿荣</span>
          <Label type="warning">三星级</Label>
          <Label type="success">已实名</Label>
          <Label>一证五卡:3</Label>
          <Label>II 类客户</Label>
        </div>
        <div className={style.body}>
          <dl>
            <dt>证件号码：</dt>
            <dd>61052********732X</dd>
          </dl>
          <dl>
            <dt>联系电话：</dt>
            <dd>13508086500</dd>
          </dl>
          <dl>
            <dt>信用额度：</dt>
            <dd className={style.strong}>200元</dd>
          </dl>
          <dl>
            <dt>可用积分：</dt>
            <dd className={style.strong}>3233</dd>
          </dl>
          <dl>
            <dt>是否欠费：</dt>
            <dd className={style.strong}>否</dd>
          </dl>
        </div>
        <div className={style.body}>
          <dl>
            <dt>客户地址：</dt>
            <dd>广西南宁市青秀区金湖路2号</dd>
          </dl>
        </div>
        <Form className={style.form}>
          <Search className={style.cont} />
          <Button type="primary" htmlType="button">新建账户</Button>
        </Form>
      </div>
    );
  }
}
