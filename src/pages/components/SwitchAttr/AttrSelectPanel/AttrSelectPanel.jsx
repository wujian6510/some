import React, { Component, Fragment } from 'react';
import {
  Select, Popover, Input, Tag, Button,
} from 'antd';
import { Label } from '$pages/components/PageLayouts';
import classnames from 'classnames';
import style from './AttrSelectPanel.module.scss';
import {
  AccountData,
  UserData,
  BankData,
} from './const';

const { Option } = Select;
const { Search } = Input;
const InputGroup = Input.Group;

export default class AttrSelectAccount extends Component {
  static defaultProps = {
    attr: {},
  }

  renderType = (type) => {
    switch (type) {
      case 'ACC': // 选账户
        return this.renderAccounts(AccountData, type);
      case 'ASU': // 选使用者
        return this.renderUsers(UserData, type);
      case 'ASB': // 选银行
        return this.renderBank(BankData, type);
      default:
        return null;
    }
  }

  renderPlaceholder = (type) => {
    switch (type) {
      case 'ACC': // 选账户
        return '输入客户名称、账户名称、合同号';
      case 'ASU': // 选使用者
        return '输入客户名称、客户编码、证件号码';
      case 'ASB': // 选银行
        return '输入银行名称、银行编号';
      default:
        return null;
    }
  }

  renderBank = (items, type) => (
    <Fragment>
      <div className={style.head}>
        <InputGroup compact>
          <Select defaultValue="0" className={style.select}>
            <Option value="0">简单搜索</Option>
            <Option value="1">账户标识</Option>
            <Option value="2">代表电话</Option>
            <Option value="3">证件号码</Option>
          </Select>
          <Search className={style.input} placeholder={this.renderPlaceholder(type)} />
        </InputGroup>
      </div>
      <div className={style.list}>
        {
          items instanceof Array && items.length > 0 ? items.map((opt, i) => (
            <div className={style.item} key={i}>
              <dl className={style.dl}>
                <dt className={style.dt}>{opt.title}</dt>
                <dd className={style.dd}>
                  <div className={style.cont}>
                    {`本地网：${opt.content}`}
                  </div>
                </dd>
              </dl>
            </div>
          )) : null
        }
      </div>
    </Fragment>
  )

  renderAccounts = (items, type) => (
    <Fragment>
      <div className={style.head}>
        <div className={style.hdMain}>
          <InputGroup compact>
            <Select defaultValue="0" className={style.select}>
              <Option value="0">简单搜索</Option>
              <Option value="1">账户标识</Option>
              <Option value="2">代表电话</Option>
              <Option value="3">证件号码</Option>
            </Select>
            <Search className={style.input} placeholder={this.renderPlaceholder(type)} />
          </InputGroup>
        </div>
      </div>
      <div className={style.list}>
        {
          items instanceof Array && items.length > 0 ? items.map((opt, i) => (
            <div className={style.item} key={i}>
              <dl className={style.dl}>
                <dt className={style.dt}>{opt.title}</dt>
                <dd className={style.dd}>
                  <div className={style.cont}>
                    {`账户名称：${opt.account}`}
                  </div>
                  {
                    opt.label && (
                      <div className={style.label}>
                        <Tag color="blue">{opt.label}</Tag>
                      </div>
                    )
                  }
                </dd>
              </dl>
            </div>
          )) : null
        }
      </div>
      <div className={style.extra}>
        <a>
          <span className="iconfont ma-plus" />
          创建新账户
        </a>
      </div>
    </Fragment>
  )

  renderUsers = (items, type) => (
    <Fragment>
      <div className={style.head}>
        <div className={style.hdMain}>
          <InputGroup compact>
            <Select defaultValue="0" className={style.select}>
              <Option value="0">简单搜索</Option>
              <Option value="1">账户标识</Option>
              <Option value="2">代表电话</Option>
              <Option value="3">证件号码</Option>
            </Select>
            <Search className={style.input} placeholder={this.renderPlaceholder(type)} />
          </InputGroup>
        </div>
        <div className={style.hdCtrl}>
          <Button type="primary">读取身份证</Button>
        </div>
      </div>
      <div className={style.list}>
        {
          items instanceof Array && items.length > 0 ? items.map((opt, i) => (
            <div className={style.item} key={i}>
              <dl className={style.dl}>
                <dt className={style.dt}>{opt.title}</dt>
                <dd className={style.dd}>
                  <div className={style.cont}>
                    {`居民身份证：${opt.idCard}`}
                  </div>
                  {
                    opt.state === '已实名' ? (
                      <div className={style.label}>
                        <Label type="success">{opt.state}</Label>
                      </div>
                    ) : (
                      <div className={style.label}>
                        <Tag color="red">{opt.state}</Tag>
                      </div>
                    )
                  }
                </dd>
              </dl>
            </div>
          )) : null
        }
      </div>
    </Fragment>
  )

  render() {
    const { attr, type } = this.props;
    return (
      <div className={style.group}>
        <Popover
          overlayClassName={style.dropdown}
          getPopupContainer={node => node}
          content={this.renderType(type)}
          trigger="click"
        >
          <Input
            allowClear
            addonBefore={attr.cname}
            className={
              classnames(
                style.input,
                attr.isNull === 'F' && 'required',
              )
            }
            placeholder={this.renderPlaceholder(type)}
            suffix={
              <span className="iconfont ma-zoom" />
            }
          />
        </Popover>
      </div>
    );
  }
}
