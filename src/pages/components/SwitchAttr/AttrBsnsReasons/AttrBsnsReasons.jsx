import React, { Component } from 'react';
import {
  Popover, Input, Form, Select, Button, Icon,
} from 'antd';
import classnames from 'classnames';
import { TypeData, ResultData } from './const';
import style from './AttrBsnsReasons.module.scss';

const { Option } = Select;
const { TextArea } = Input;
const { create } = Form;

class AttrBsnsReasons extends Component {
  static defaultProps = {
    attr: {},
  }

  state = {
    value: '',
  }

  renderForm = () => {
    const { getFieldDecorator, validateFields } = this.props.form;
    return (
      <Form
        layout="horizontal"
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          validateFields((err, values) => {
            if (!err) {
              this.setState({
                value: `${values.type} ${values.result} ${values.remarks}`,
              });
            }
          });
        }}
      >
        <Form.Item label="业务调查类型">
          {getFieldDecorator('type', {
            initialValue: '',
          })(
            <Select placeholder="请选择">
              {
                TypeData.map((item, index) => (
                  <Option value={item} key={index}>{item}</Option>
                ))
              }
            </Select>,
          )}
        </Form.Item>
        <Form.Item label="业务调查结果">
          {getFieldDecorator('result', {
            initialValue: '',
          })(
            <Select placeholder="请选择">
              {
              ResultData.map((item, index) => (
                <Option value={item} key={index}>{item}</Option>
              ))
            }
            </Select>,
          )}
        </Form.Item>
        <Form.Item label="调查备注">
          {getFieldDecorator('remarks', {
            initialValue: '',
          })(
            <TextArea placeholder="请输入" rows={3} />,
          )}
        </Form.Item>
        <Form.Item className="text-right">
          <Button type="primary" htmlType="submit">确定</Button>
        </Form.Item>
      </Form>
    );
  }

  render() {
    const { attr } = this.props;
    const { value } = this.state;
    return (
      <div className={style.wrap}>
        <Popover
          overlayClassName={style.dropdown}
          getPopupContainer={node => node}
          content={this.renderForm()}
          trigger="click"
        >
          <Input
            addonBefore={attr.cname}
            suffix={<Icon type="down" />}
            value={value}
            readOnly
            className={
              classnames(
                style.input,
                attr.isNull === 'F' && 'required',
              )
            }
          />
        </Popover>
      </div>
    );
  }
}

export default create()(AttrBsnsReasons);
