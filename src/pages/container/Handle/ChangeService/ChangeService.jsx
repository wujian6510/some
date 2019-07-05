import React, { Component } from 'react';
import { Button } from 'antd';
import {
  PageHead, PageFooter,
} from '$pages/components/PageLayouts';
import style from './ChangeService.module.scss';
import FunctionProducts from './FunctionProducts'; // 改功能产品
import FreeUser from './FreeUser'; // 改功能产品
import BroadbandService from './BroadbandService'; // 宽带提速
import HandleCommonInfo from '$pages/container/Handle/HandleCommonInfo'; // 公共信息
import offerData from '$pages/container/Handle/offer'; // 假数据

export default class ChangeService extends Component {
  state = { }

  render() {
    const {
      commonAttr,
    } = offerData.resultObject;
    return (
      <div className={style.wrap}>
        <PageHead
          icon={<span className="iconfont ma-handle-hl" />}
          title="改功能产品"
          layout="fixed"
          steps={{
            data: ['订单录入', '结算确认', '收费签字'],
            stepsProps: {
              current: 0,
            },
          }}
        />
        <FreeUser />
        <BroadbandService />
        <FunctionProducts />
        <HandleCommonInfo commonAttr={commonAttr} />
        <PageFooter>
          <Button type="default" size="large">存购物车，办理其它业务</Button>
          <Button size="large" className="btn-warn">填写完成,去结算</Button>
        </PageFooter>
      </div>
    );
  }
}
