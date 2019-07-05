import React, { Component, Fragment } from 'react';
import {
  Button, Form, Select, Input,
} from 'antd';
import { PageDrawer } from '$pages/components/PageLayouts';
import style from './DrawerTerminal.module.scss';
import { PageData } from './const';

const { Option } = Select;
const { Search } = Input;

export default class DrawerTerminal extends Component {
  state = {
    selectable: PageData,
    selected: [],
  }

  renderItems = (items, edit) => {
    if (items instanceof Array && items.length > 0) {
      return (
        <ul className={style.list}>
          {
            items.map((item, index) => (
              <li
                className={style.item}
                key={index}
              >
                <div className={style.itemCont}>
                  {item.label}
                </div>
                {
                  (typeof edit === 'boolean' && edit) ? (
                    <a onClick={() => { this.onSelected(item.key, item); }} className="text-danger">删除</a>
                  ) : (
                    <a onClick={() => { this.onSelectable(item.key, item); }}>添加</a>
                  )}

              </li>
            ))
          }
        </ul>
      );
    }
    return '';
  }

  onSelectable = (key, value) => {
    this.setState(prev => ({
      selectable: prev.selectable.filter(item => (item.key !== key)),
      selected: [
        ...prev.selected,
        value,
      ],
    }));
  }

  onSelected = (key, value) => {
    this.setState(prev => ({
      selected: prev.selected.filter(item => (item.key !== key)),
      selectable: [
        ...prev.selectable,
        value,
      ],
    }));
  }

  isValue = (value) => {
    if (typeof value === 'string' && value.length !== 0) {
      return value;
    }
    return '';
  }

  render() {
    const { visible, onClose } = this.props;
    const { selectable, selected } = this.state;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const formItemControl = {
      wrapperCol: { offset: 6, span: 18 },
    };
    return (
      <PageDrawer
        drawerProps={{
          title: '选择终端',
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
        <div className={style.row}>
          <div className={style.col}>
            <div className={style.colTit}>待选</div>
            <div className={style.colSearch}>
              <Search placeholder="搜一搜" />
            </div>
            <div className={style.colContainer}>
              <div className={style.colMain}>
                {this.renderItems(selectable)}
              </div>
            </div>
          </div>
          <div className={style.col}>
            <div className={style.colTit}>已选</div>
            <div className={style.colContainer}>
              <div className={style.colMain}>
                {this.renderItems(selected, true)}
              </div>
            </div>
          </div>
          <div className={style.col}>
            <div className={style.colTit}>属性</div>
            <div className={style.colContainer}>
              <div className={style.colForm}>
                <Form
                  layout="horizontal"
                  className="form-horizontal"
                  {...formItemLayout}
                >
                  <Form.Item label="代维标志">
                    <Select
                      showSearch
                      placeholder="请选择"
                    >
                      <Option value="0">代维</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="终端串码">
                    <Input placeholder="请选择" />
                  </Form.Item>
                  <Form.Item label="采购类型">
                    <Select
                      showSearch
                      placeholder="请选择"
                    >
                      <Option value="0">省集中</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="终端价格">
                    <Input placeholder="请选择" addonAfter="元" />
                  </Form.Item>
                  <Form.Item label="设备差价">
                    <Input placeholder="请选择" addonAfter="元" />
                  </Form.Item>
                  <Form.Item {...formItemControl}>
                    <Button type="primary">保存</Button>
                    <Button>重置</Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </PageDrawer>
    );
  }
}
