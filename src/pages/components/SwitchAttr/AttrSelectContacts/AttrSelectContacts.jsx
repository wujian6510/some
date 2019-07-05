import React, { Component, Fragment } from 'react';
import {
  Icon, Input, Popover,
} from 'antd';
import classnames from 'classnames';
import style from './AttrSelectContacts.module.scss';

const data = [
  {
    value: '0',
    name: '陈于意 13304110605',
  },
  {
    value: '1',
    name: '陈继会 13304112605',
  },
  {
    value: '2',
    name: '梁于 13304114605',
  },
  {
    value: '3',
    name: '钟意 13304155605',
  },
];

export default class AttrSelectContacts extends Component {
  state = { }

  renderItems = (items) => {
    if (items instanceof Array && items.length > 0) {
      return (
        <ul className={style.list}>
          {
            items.map((item, index) => (
              <li value={item.name} key={index} className={style.item}>
                <div className={style.itemCont}>
                  {item.name}
                </div>
                <div className={style.extra}>
                  <a>修改</a>
                </div>
              </li>
            ))
          }
        </ul>
      );
    }
    return null;
  };

  render() {
    const { attr } = this.props;
    return (
      <div className={style.group}>
        <Popover
          overlayClassName={style.dropdown}
          getPopupContainer={node => node}
          content={(
            <Fragment>
              {this.renderItems(data)}
              <div className={style.ctrl}>
                <a>
                  <span className="iconfont ma-plus" />
                  创建联系人
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
