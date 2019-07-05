import React, { Component, Fragment } from 'react';
import {
  AutoComplete, Icon, Input, Popover,
} from 'antd';
import classnames from 'classnames';
import { PageData } from './const';
import style from './AttrSelectNumber.module.scss';

export default class AttrSelectNumber extends Component {
  state = { }

  renderItems = (data) => {
    if (data instanceof Array && data.length > 0) {
      return (
        data.map(column => (
          <dl key={column.key} className={style.dl}>
            <dt className={style.dt}>{column.name}</dt>
            <dd>
              {
                column.children.map(item => (
                  <li key={item.key} className={style.item} value={item.number}>
                    <div className={style.itemCont}>{item.name}</div>
                    <div className={style.itemExtra}>{item.number}</div>
                  </li>
                ))
              }
            </dd>
          </dl>
        ))
      );
    }
    return [];
  }

  render() {
    const { attr } = this.props;
    return (
      <div className={style.wrap}>
        <Popover
          overlayClassName={style.dropdown}
          getPopupContainer={node => node}
          content={(
            <Fragment>
              <div className={style.main}>
                {this.renderItems(PageData)}
              </div>
              <div className={style.ctrl}>
                <a>
                  <span className="iconfont ma-plus" />
                  选择新号码
                </a>
              </div>
            </Fragment>
        )}
          trigger="click"
        >
          <Input
            addonBefore={attr.cname}
            allowClear
            className={
            classnames(
              style.input,
              attr.isNull === 'F' && 'required',
            )
          }
            suffix={
              <span className="iconfont ma-drop-down" />
          }
          />
        </Popover>
      </div>
    );
  }
}
