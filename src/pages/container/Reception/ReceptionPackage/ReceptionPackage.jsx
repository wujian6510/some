import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { PagePanel } from '$pages/components/PageLayouts';
import LittlePaging from '$pages/components/LittlePaging';
import style from './ReceptionPackage.module.scss';

const { Search } = Input;

export default class ReceptionPackage extends Component {
  renderItems = (items) => {
    if (items instanceof Array && items.length > 0) {
      return (
        <ul className={style.list}>
          {
            items.map((item, index) => (
              <li className={style.item} key={index}>
                <a>{item.name}</a>
              </li>
            ))
          }
        </ul>
      );
    }
    return null;
  }

  render() {
    const { data } = this.props;
    return (
      <PagePanel
        title="套餐订购"
        extra={(
          <LittlePaging />
        )}
        className={style.panel}
        footer={(
          <Button
            htmlType="button"
            block
            className={style.btn}
          >
            <span className="iconfont ma-package-hl text-primary" />
          更多套餐
          </Button>
        )}
      >
        <div className={style.search}>
          <Search placeholder="输入关键字搜索 " />
        </div>
        {this.renderItems(data)}
      </PagePanel>
    );
  }
}
