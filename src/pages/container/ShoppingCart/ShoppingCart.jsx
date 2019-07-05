import React, { Component } from 'react';
import {
  Empty, Button, Divider, Checkbox, Popconfirm,
} from 'antd';
import {
  SettledData,
  EnteredData,
} from './const';
import { PageDrawer } from '$pages/components/PageLayouts';
import style from './ShoppingCart.module.scss';

export default class ShoppingCart extends Component {
  state = { }

  renderRecord = (data) => {
    if (data instanceof Array) {
      return (
        <dl className={style.dl}>
          <dt className={style.dt}>{`待录入(${data.length})`}</dt>
          {
          data.length > 0 && (
          <dd className={style.dd}>
            <Checkbox.Group className={style.group}>
              {
                data.map((item, j) => (
                  <div className={style.item} key={j}>
                    <div className={style.itemCont}>
                      <Checkbox value={j}>{item.title}</Checkbox>
                    </div>
                    <div className={style.itemCtrl}>
                      <a>修改</a>
                      <Divider type="vertical" />
                      <a>删除</a>
                    </div>
                  </div>
                ))
              }
            </Checkbox.Group>
          </dd>
          )
        }
        </dl>
      );
    }
    return <Empty />;
  }

  renderColumn = (data) => {
    if (data instanceof Array) {
      return (
        <dl className={style.dl}>
          <dt className={style.dt}>{`待结算(${data.length})`}</dt>
          {
            data.length > 0 && (
            <dd className={style.dd}>
              <Checkbox.Group className={style.group}>
                {
                  data.map((item, j) => (
                    <div className={style.column} key={j}>
                      <Checkbox value={j} className={style.checkbox} />
                      <div className={style.colMain}>
                        <div className={style.colHead}>
                          {item.title}
                        </div>
                        <div className={style.colBody}>
                          <div className={style.section}>天翼手机：17586658598（主）、17586658599（副）、17586658595（副）</div>
                          <div className={style.section}>天翼宽带：077120190320</div>
                          <div className={style.section}>IPTV：077120190320</div>
                        </div>
                      </div>
                      <div className={style.colExtra}>
                        <div className={style.section}>
                          <span className={style.strong}>￥199.00</span>
                        </div>
                        <div className={style.section}>
                          <a>修改</a>
                          <Divider type="vertical" />
                          <a>删除</a>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </Checkbox.Group>
            </dd>
            )
          }
        </dl>
      );
    }
    return <Empty />;
  }

  render() {
    const { visible, onClose } = this.props;
    return (
      <PageDrawer
        drawerProps={{
          title: '购物车',
          visible,
          width: '600px',
          maskClosable: true,
          onClose: () => { onClose(); },
        }}
        footer={(
          <div className={style.footer}>
            <div className={style.ftMain}>
              <Popconfirm
                title="删除后无法找回，确定要删除吗？"
                okText="确定"
                cancelText="取消"
              >
                <Button>删除选中</Button>
              </Popconfirm>
              <Popconfirm
                title="清空后无法找回，确定要清空吗？"
                okText="确定"
                cancelText="取消"
              >
                <Button>一键清空</Button>
              </Popconfirm>
            </div>
            <div className={style.ftExtra}>
              <Button className="btn-warn">合并结算</Button>
            </div>
          </div>
        )}
      >
        <div className={style.main}>
          {this.renderRecord(SettledData)}
          {this.renderColumn(EnteredData)}
        </div>
      </PageDrawer>
    );
  }
}
