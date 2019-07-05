import React, { Component, Fragment } from 'react';
import {
  Form, Input, DatePicker, Button, Select, Tag,
} from 'antd';
import { PageDrawer } from '$pages/components/PageLayouts';
import { PageData } from './const';
import style from './DrawerOptionPackage.module.scss';

const { Search } = Input;
const { Option } = Select;

class DrawerOptionPackage extends Component {
  state = {
    selectable: PageData, // 待选可选包列表
    selected: [], // 已选可选包列表
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
                {item.tag === 1 && <Tag color="red">收费</Tag>}
                <div className={style.itemCont} onClick={this.getAttrs}>
                  {item.label}
                </div>
                {
                  (typeof edit === 'boolean' && edit) ? (
                    <a className="text-danger" onClick={() => { this.onSelected(item.key, item); }}>删除</a>
                  )
                    : (
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

  // 添加到已选列表
  onSelectable = (key, value) => {
    this.setState(prev => ({
      selectable: prev.selectable.filter(item => (item.key !== key)),
      selected: [
        ...prev.selected,
        value,
      ],
    }));
  }

  // 移除已选
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
    const { selectable, selected } = this.state;
    const { getFieldDecorator } = this.props.form;
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
          title: '可选包',
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
              <Search placeholder="搜一搜" onSearch={this.searchPackage} />
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
                    <Button htmlType="button" type="primary" onClick={this.saveAttrs}>保存</Button>
                    <Button htmlType="button" onClick={this.restAttrs}>重置</Button>
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

export default Form.create({})(DrawerOptionPackage);
