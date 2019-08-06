import React, { Component } from 'react';
import { Button, Empty, Steps } from 'antd';
import { PageHead, PageFooter } from '$pages/components/PageLayouts';
import { PageData } from './const';
import style from './Statements.module.scss';

const { Step } = Steps;

export default class Statements extends Component {
  state = {}

  renderOrder = (data) => {
    const renderPanels = (items, type) => {
      if (items instanceof Array && typeof type === 'string') {
        switch (type) {
          case 'panel':
            return (
              items.map((item, i) => (
                <dl key={i} className={style.panel}>
                  <dt className={style.panelHead}>
                    <div className={style.panelTit}>{item.title}</div>
                    <Button htmlType="button">
                      修改订单
                    </Button>
                  </dt>
                  <dd className={style.panelBody}>
                    {renderPanels(item.column, 'column')}
                  </dd>
                </dl>
              ))
            );
          case 'column':
            return (
              items.map((item, i) => (
                <div className={style.column} key={i}>
                  <div className={style.colTit}>{item.title}</div>
                  <div className={style.colBody}>
                    {renderPanels(item.column, 'class')}
                  </div>
                </div>
              ))
            );
          case 'class':
            return (
              items.map((item, i) => (
                <dl className={style.dl} key={i}>
                  <dt className={style.dt}>{item.title}</dt>
                  <dd className={style.dd}>
                    {renderPanels(item.data, 'item')}
                  </dd>
                </dl>
              ))
            );
          case 'item':
            return (
              items.map((item, i) => (
                item.strong ? (
                  <div className={style.section} key={i}>
                    {
                      typeof item.label === 'string' && (
                        <span className="text-strong">
                          {`${item.label}：`}
                        </span>
                      )
                    }
                    {item.value}
                  </div>
                ) : (
                  <span className={style.span} key={i}>
                    {typeof item.label === 'string' ? `${item.label}：${item.value}` : item.value}
                  </span>
                )
              ))
            );
          default:
            return null;
        }
      }
      return null;
    };

    if (data instanceof Array && data.length > 0) {
      return renderPanels(data, 'panel');
    }
    return <Empty />;
  }

  render() {
    const { push } = this.props.history;
    return (
      <div className={style.wrap}>
        <div className={style.container}>
          <PageHead
            icon={<span className="iconfont ma-checkstand-nor" />}
            title="核对订单信息"
            layout="fixed"
            steps={{
              data: ['订单录入', '结算确认', '收费签字'],
              stepsProps: {
                current: 1,
              },
            }}
          />
          <div className={style.group}>
            {this.renderOrder(PageData)}
            <div className={style.panel}>
              <div className={style.panelHead}>
                <div className={style.panelTit}>公共信息</div>
              </div>
              <div className={style.panelBody}>
                <dl className={style.dl}>
                  <dd className={style.dd}>
                    <span className={style.span}>联系人：许庆学 18981819968</span>
                    <span className={style.span}>经办人：于晓慧 18981819968</span>
                  </dd>
                </dl>
                <dl className={style.dl}>
                  <dd className={style.dd}>
                    <span className={style.span}>备注信息： 暂无</span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className={style.footer}>
            <div className={style.total}>
              总金额：
              <span className="text-strong">￥399.00</span>
            </div>
            <Button htmlType="button" onClick={() => { push('/reception'); }}>继续办理其它业务</Button>
            <Button htmlType="button" onClick={() => { push('/reception'); }}>放弃办理</Button>
            <Button
              htmlType="button"
              className="btn-warn"
              onClick={() => { push('/checkstand'); }}
            >
              去收费
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
