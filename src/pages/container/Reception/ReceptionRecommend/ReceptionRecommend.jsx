import React, { Component } from 'react';
import { Divider } from 'antd';
import { PagePanel } from '$pages/components/PageLayouts';
import style from './ReceptionRecommend.module.scss';

export default class ReceptionRecommend extends Component {
  static defaultProps = {
    data: [],
  }

  renderItems = (items) => {
    if (items instanceof Array && items.length > 0) {
      return (
        <ul className={style.list}>
          {
            items.map((item, index) => (
              <li className={style.item} key={index}>
                <div className={style.tit}>
                  {item.title}
                </div>
                <div className={style.ctrl}>
                  <a onClick={() => { this.props.history.push('/handle'); }}>立即办理</a>
                  <Divider type="vertical" />
                  <a>发送短信</a>
                </div>
              </li>
            ))
          }
        </ul>
      );
    }
    return '';
  }

  render() {
    const { data, onMoreRecommend } = this.props;
    return (
      <PagePanel
        title="营销推荐"
        extra={(
          <a
            className={style.more}
            onClick={() => {
              onMoreRecommend();
            }}
          >
            更多
          </a>
        )}
      >
        {this.renderItems(data)}
      </PagePanel>
    );
  }
}
