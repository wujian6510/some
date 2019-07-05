import React, { Component } from 'react';
import { Button } from 'antd';
import { PageHead, PageFooter } from '$pages/components/PageLayouts';
import { FormContent } from '$pages/components/FormElement';
import { connect } from 'react-redux';
import style from './Handle.module.scss';
import offerData from './offer';
import HandleProduct from './HandleProduct';
import HandleCommonInfo from './HandleCommonInfo';


import { DrawerCreatAccount, DrawerNumber } from '$pages/container/Drawer';
import SelectNationality from '$pages/components/SelectNationality';

class Handle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [], // 功能产品
    };
  }

  componentDidMount() {
    this.initSceneByOfferId();
  }

  initSceneByOfferId = () => {
    const {
      product,
    } = offerData.resultObject;
    this.setState({
      product,
    });
  }

  render() {
    const {
      product,
    } = this.state;
    const {
      commonAttr,
    } = offerData.resultObject;
    return (
      <div className={style.wrap}>
        <PageHead
          icon={<span className="iconfont ma-handle-hl" />}
          title="新装"
          layout="fixed"
          steps={{
            data: ['订单录入', '结算确认', '收费签字'],
            stepsProps: {
              current: 0,
            },
          }}
          className={style.head}
        >
          <div className={style.packageInfo}>
            <div className={style.tit}>十全十美不限量融合</div>
            <div className={style.cont}>
              {
                FormContent(
                  {
                    data: [
                      { label: '移动 2/5' },
                      { label: '宽带 1/1' },
                      { label: '固话 1/2' },
                      { label: 'IPTV 1/1' },
                      { label: '终端 1/4' },
                    ],
                    type: 'tags',
                  },
                )
              }
            </div>
          </div>
        </PageHead>
        <div className={style.container}>
          <div className={style.main}>
            {
              product.map((p, pi) => (p.isShow === 'T' ?
                (
                  <HandleProduct
                    key={p.moduleId}
                    product={p}
                    offerInst={this.offerInst}
                    changeProductCount={(prodId, type) => this.handleChangeProductCount(prodId, type)}
                  />
                ) : ''))
            }
            <HandleCommonInfo commonAttr={commonAttr} />
            <PageFooter>
              <Button type="default" size="large">取消录入</Button>
              <Button size="large" className="btn-warn">填写完成,去结算</Button>
            </PageFooter>
            <DrawerCreatAccount />
          </div>
        </div>
        <div style={{ width: '200px' }}>
          <SelectNationality />
        </div>
        <DrawerNumber />
      </div>
    );
  }
}

export default connect(store => ({
  combo: store.combo,
}), null)(Handle);
