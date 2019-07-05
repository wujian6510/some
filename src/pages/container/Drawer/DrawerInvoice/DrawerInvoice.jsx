import React, { Component, Fragment } from 'react';
import { Button, Form, Input } from 'antd';
import classnames from 'classnames';
import CheckTiles from '$pages/components/CheckTiles';
import { PageDrawer } from '$pages/components/PageLayouts';
import style from './DrawerInvoice.module.scss';

export default class DrawerInvoice extends Component {
  static defaultProps = {
    visible: false,
    onClose: () => {},
  }

  render() {
    const { visible, onClose } = this.props;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    return (
      <PageDrawer
        drawerProps={{
          title: '发票信息',
          visible,
          width: '480px',
          maskClosable: true,
          onClose: () => { onClose(); },
        }}
        footer={(
          <Fragment>
            <Button>取消</Button>
            <Button type="primary">确定</Button>
          </Fragment>
        )}
      >
        <div className={style.tips}>
          <div className={style.body}>电子普通发票和纸质普通发票具备同等法律效力，可支持报销入账，订单完成后24小时内开具，中国电信全面启用电子普通发票，如商品由第三方卖家销售，发票类型及内容将由该卖家决定。</div>
          <div className={style.footer}>
            <a>查看电子普通发票相关信息</a>
          </div>
        </div>
        <Form
          layout="horizontal"
          className={style.Form}
          {...formItemLayout}
        >
          <Form.Item label="发票类型">
            <CheckTiles
              layout="inline"
              data={[
                {
                  label: '电子普通发票',
                  value: 0,
                },
                {
                  label: '增值税专用发票',
                  value: 1,
                },
              ]}
              groupProps={{
                defaultValue: [0],
              }}
            />
          </Form.Item>
          <Form.Item label="发票抬头">
            <CheckTiles
              layout="inline"
              className={style.section}
              groupProps={{
                defaultValue: [0],
              }}
              data={[
                {
                  label: '个人',
                  value: 0,
                },
                {
                  label: '企业',
                  value: 1,
                },
              ]}
            />
            <div className={style.section}>
              <Input placeholder="请填写公司发票抬头" />
            </div>
            <div className={style.section}>
              <Input placeholder="请输入纳税人识别号" />
            </div>
          </Form.Item>
          <Form.Item label="发票内容">
            <CheckTiles
              layout="inline"
              className={style.section}
              groupProps={{
                defaultValue: [0],
              }}
              data={[
                {
                  label: '商品类别',
                  value: 0,
                },
                {
                  label: '商品明细',
                  value: 1,
                },
              ]}
            />
            <div className={style.section}>
              <Input placeholder="请输入" />
            </div>
            <div className={style.section}>
              <Input placeholder="请输入" />
            </div>
          </Form.Item>
        </Form>
      </PageDrawer>
    );
  }
}
