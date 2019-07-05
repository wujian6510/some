import React, { Component, Fragment } from 'react';
import {
  Form, Input, Select, Button, DatePicker, Tag,
} from 'antd';
import { PageDrawer } from '$pages/components/PageLayouts';
import { PageData } from './const';
import style from './DrawerFunction.module.scss';


const { Option } = Select;
const { Search } = Input;

export default class DrawerFunction extends Component {
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
                {item.tag === 1 && <Tag color="red">收费</Tag> }
                <div className={style.itemCont}>
                  {item.label}
                </div>
                {
                  (typeof edit === 'boolean' && edit) ? (
                    <a className="text-danger" onClick={() => { this.onSelected(item.key, item); }}>删除</a>
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

  render() {
    const { visible, onClose } = this.props;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const formItemControl = {
      wrapperCol: { offset: 6, span: 18 },
    };
    const { selectable, selected } = this.state;
    return (
      <PageDrawer
        drawerProps={{
          title: '选功能产品',
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
            <div className={style.colTit}>修改属性</div>
            <div className={style.colContainer}>
              <div className={style.colForm}>
                <Form
                  layout="horizontal"
                  className="form-horizontal"
                  {...formItemLayout}
                >
                  <Form.Item label="产品性质">
                    <Select>
                      <Option value="0">移动</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="产品协议">
                    <Select disabled>
                      <Option value="0">SA</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="生效时间">
                    <DatePicker style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item label="失效时间">
                    <DatePicker style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item {...formItemControl}>
                    <Button htmlType="button" type="primary">保存</Button>
                    <Button htmlType="button">重置</Button>
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
