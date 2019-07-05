import React, { Component } from 'react';
import { Empty } from 'antd';
import { PageDrawer } from '$pages/components/PageLayouts';
import PageData from './const';
import style from './DrawerRecommend.module.scss';

export default class DrawerRecommend extends Component {
  state = {}

  renderColumns = (data) => {
    if (data instanceof Array && data.length > 0) {
      return (
        <div className={style.list}>
          {
            data.map((column, i) => (
              <dl key={i} className={style.dl}>
                <dt className={style.dt}>{i + 1}</dt>
                <dd className={style.dd}>
                  <div className={style.tit}>{column.title}</div>
                  <div className={style.cont}>
                    <dl className={style.section}>
                      <dt className={style.sectionTit}>策略</dt>
                      <dd className={style.sectionCont}>{column.strategy}</dd>
                    </dl>
                    <dl className={style.section}>
                      <dt className={style.sectionTit}>话术</dt>
                      <dd className={style.sectionCont}>{column.speechcraft}</dd>
                    </dl>
                  </div>
                  <div className={style.ctrl}>
                    <a>
                      <span className="iconfont ma-buy" />
                      一键办理
                    </a>
                    <a>
                      <span className="iconfont ma-message" />
                      发送短信
                    </a>
                  </div>
                </dd>
              </dl>
            ))
          }
        </div>
      );
    }
    return <Empty />;
  }

  render() {
    const { visible, onClose } = this.props;
    return (
      <PageDrawer
        drawerProps={{
          title: '营销推荐',
          visible,
          width: '600px',
          maskClosable: true,
          onClose: () => { onClose(); },
        }}
      >
        {this.renderColumns(PageData)}
      </PageDrawer>
    );
  }
}
