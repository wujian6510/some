import React, { Component, Fragment } from 'react';
import { Input, Popover } from 'antd';
import style from './SelectNationality.module.scss';
import PageData from './const';

const { Search } = Input;

export default class SelectNationality extends Component {
  state = {
    activeKey: 1,
  }

  renderContent = () => {
    const { activeKey } = this.state;
    return (
      <Fragment>
        <Search placeholder="搜一搜" />
        <div className={style.container}>
          <ul className={style.continent}>
            {
              PageData.map((item, index) => (
                <li className={style.item} key={index}>
                  <div className={style.itemCont}>
                    <span className={style.name}>{item.name}</span>
                    <span className={style.code}>{item.code}</span>
                  </div>
                </li>
              ))
            }
          </ul>
          <ul className={style.country}>
            {
              PageData[activeKey].children.map((item, index) => (
                <li className={style.item} key={index}>
                  <div className={style.itemCont}>
                    <span className={style.name}>{item.name}</span>
                    <span className={style.code}>{item.code}</span>
                  </div>
                  <div className={style.itemExtra}>
                    <a>选定</a>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </Fragment>
    );
  }

  render() {
    return (
      <div className={style.wrap}>
        <Popover
          overlayClassName={style.dropdown}
          content={this.renderContent()}
          trigger="click"
          getPopupContainer={node => node}
        >
          <Input
            placeholder="请选择"
            suffix={<span className="iconfont ma-drop-down" />}
          />
        </Popover>
      </div>
    );
  }
}
