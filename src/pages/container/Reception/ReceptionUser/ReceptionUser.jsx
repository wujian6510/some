import React, { Component } from 'react';
import { Label } from '$pages/components/PageLayouts';
import style from './ReceptionUser.module.scss';

export default class ReceptionUser extends Component {
  state = { }

  render() {
    return (
      <div className={style.main}>
        <div className={style.head}>
          <span className={style.name}>赵四</span>
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
        <div className={style.ctrl}>
          <a>
            <span className="iconfont ma-circle-cart" />
            账户信息
          </a>
          <a>
            <span className="iconfont ma-circle-edit" />
            修改资料
          </a>
          <a>
            <span className="iconfont ma-circle-cost" />
            充值缴费
          </a>
          <a>
            <span className="iconfont ma-circle-equity" />
            权益保障
          </a>
          <a>
            <span className="iconfont ma-circle-view" />
            客户视图
          </a>
        </div>
      </div>
    );
  }
}
