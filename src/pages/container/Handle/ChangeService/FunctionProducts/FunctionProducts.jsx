import React, { Component } from 'react';
import {
  Form, Select, Button, DatePicker, Input, Icon,
} from 'antd';
import classnames from 'classnames';
import {
  PageCell, PagePanel,
} from '$pages/components/PageLayouts';
import PageData from './const';
import style from './FunctionProducts.module.scss';

const { Option } = Select;
const { Search } = Input;

export default class FunctionProducts extends Component {
  state = {
    optional: [],
    selected: [],
  }

  componentDidMount() {
    const { optional } = PageData;
    this.setState({
      optional,
    });
  }

  renderItems = (items) => {
    if (items instanceof Array && items.length > 0) {
      return (
        <ul className={style.list}>
          {
            items.map((item, index) => (
              <li className={style.item} key={index}>
                <div className={style.itemCont}>
                  {item.label}
                  {item.tag === 1 && <span className="text-strong">[收费]</span> }
                </div>
                <div className={style.itemCtrl}>
                  <a>添加</a>
                </div>
              </li>
            ))
          }
        </ul>
      );
    }
    return null;
  }

  render() {
    const { selected, optional } = this.state;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const formItemControl = {
      wrapperCol: { offset: 6, span: 18 },
    };
    return (
      <PagePanel title="功能产品" size="large">
        <PageCell className={style.cell}>
          <dl className={style.dl}>
            <dt className={style.dt}>待选</dt>
            <dd className={style.search}>
              <Search placeholder="搜一搜" />
            </dd>
            <dd className={style.dd}>
              {this.renderItems(optional)}
            </dd>
          </dl>
          <dl className={style.dl}>
            <dt className={style.dt}>已选</dt>
            <dd className={style.dd}>
              {this.renderItems(selected)}
            </dd>
          </dl>
          <dl className={style.dl}>
            <dt className={style.dt}>属性</dt>
            <dd className={style.dd}>
              <Form
                layout="horizontal"
                className={classnames('form-horizontal', style.form)}
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
                  <Button htmlType="button" type="primary" size="small">保存</Button>
                  <Button htmlType="button" size="small">重置</Button>
                </Form.Item>
              </Form>
            </dd>
          </dl>
        </PageCell>
      </PagePanel>
    );
  }
}
