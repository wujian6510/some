import React, { Component, Fragment } from 'react';
import { Tabs, Button } from 'antd';
import { PageDrawer } from '$pages/components/PageLayouts';
import { FormContent } from '$pages/components/FormElement';
import HighSelectNumber from './HighSelectNumber';
import style from './DrawerNumber.module.scss';

export default class DrawerNumber extends Component {
  state = { }

  render() {
    const { visible, onClose } = this.props;
    return (
      <PageDrawer
        drawerProps={{
          title: '选号码',
          visible,
          width: '1000px',
          maskClosable: true,
          onClose: () => { onClose(); },
        }}
        bodyClass={style.drawer}
        footer={(
          <Fragment>
            <Button onClick={() => { onClose(); }}>取消</Button>
            <Button type="primary">确定</Button>
          </Fragment>
        )}
      >
        <div className={style.container}>
          <HighSelectNumber />
        </div>
        <div className={style.sider}>
          <dl>
            <dt>主卡(1/1)</dt>
            <dd>
              <ul>
                <li>
                  {
                    FormContent({
                      data: {
                        value: '180 1898 3555',
                        label: '180 1898 3555',
                        closable: true,
                      },
                      type: 'tag',
                    })
                  }
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>副卡(2/4)</dt>
            <dd>
              <ul>
                <li>
                  {FormContent({
                    data: {
                      value: '180 1898 3555',
                      label: '180 1898 3555',
                      closable: true,
                    },
                    type: 'tag',
                  })}
                </li>
                <li>
                  {FormContent({
                    data: {
                      value: '180 1898 3555',
                      label: '180 1898 3555',
                      closable: true,
                    },
                    type: 'tag',
                  })}
                </li>
              </ul>
            </dd>
          </dl>
        </div>
      </PageDrawer>
    );
  }
}
