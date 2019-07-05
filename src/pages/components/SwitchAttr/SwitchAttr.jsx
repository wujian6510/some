import React, { Fragment } from 'react';
import {
  Button, Form, Checkbox, Radio, Row, Col, Input, Select, AutoComplete, Icon, DatePicker,
} from 'antd';
import classnames from 'classnames';
import NumberPopover from '$pages/container/Handle/NumberPopover';
import style from './Switch.module.scss';


import AttrSelectPanel from './AttrSelectPanel'; // 选择浮层面板
import AttrSelectContacts from './AttrSelectContacts'; // 选联系人
import AttrSelectNumber from './AttrSelectNumber'; // 选号
import AttrSelectOperator from './AttrSelectOperator'; // 选经办人

const { Option } = Select;
const InputGroup = Input.Group;


class AttrForm extends React.Component {
  /**
   * 属性表现形式转换
   */
  tranchsAttr = (attr) => {
    const { methods, form } = this.props;
    const { getFieldDecorator } = form;
    const {
      attrId, attrValueTypeId, cname, ifDefaultValue, defaultValue, pageUrl, isNull,
    } = attr;
    switch (attrValueTypeId) {
      case '98A': { // 下拉框 TODO 取下拉框的值
        const options = [{ value: '1', label: '城市1' }, { value: '2', label: '城市2' }];
        return (
          <div className="input-group">
            { cname ? (
              <div
                className={
                  classnames(
                    'addon-before',
                    isNull === 'F' && 'required',
                    attr.disabled && 'disabled',
                  )
                }
              >
                {cname}
              </div>
            ) : null }
            <Select
              showSearch
              defaultValue={defaultValue}
              placeholder="请选择"
              className="select"
            >
              {
              options.map((item, i) => (
                <Option value={item.value} key={i}>{item.label}</Option>
              ))
              }
            </Select>
          </div>
        );
      }
      case '98C': // 文本输入框
        return (
          <Input
            addonBefore={cname}
            defaultValue={defaultValue}
            placeholder="请输入"
            className={
              classnames(
                'input',
                isNull === 'F' && 'required',
              )
            }
          />
        );
      case '98D': // 日期选择 TODO
        return (
          <div className="input-group">
            { cname ? (
              <div
                className={
                  classnames(
                    'addon-before',
                    isNull === 'F' && 'required',
                    attr.disabled && 'disabled',
                  )
                }
              >
                {cname}
              </div>
            ) : null }
            <div className="datePicker">
              <DatePicker
                addonBefore={cname}
                defaultValue={defaultValue}
                placeholder="请输入"
                className={
                classnames(
                  isNull === 'F' && 'required',
                )
              }
              />
            </div>
          </div>
        );
      case '98M': // 可以弹出框
        return (
          <InputGroup
            compact
            className={
              classnames(
                'input-group',
                isNull === 'F' && 'required',
                'has-extra',
              )
            }
          >
            <Input
              addonBefore={cname}
              defaultValue={defaultValue}
              placeholder="请输入"
            />
            <Fragment>
              <Button>
                <span className="iconfont ma-zoom" />
              </Button>
            </Fragment>
          </InputGroup>
        );
      case 'FE': // 密码输入 TODO
        return null;
      case 'HM': // 号码 特殊
        return (
          <InputGroup
            compact
            className={
              classnames(
                'input-group',
                isNull === 'F' && 'required',
                'has-extra',
              )
            }
          >
            <Input
              addonBefore={cname}
              defaultValue={defaultValue}
              placeholder="请输入"
            />
            <Fragment>
              <NumberPopover prodId="208511296">
                <Button>
                  <span className="iconfont ma-drop-down" />
                </Button>
              </NumberPopover>
              <Button onClick={() => {}}>
                <span className="iconfont ma-zoom" />
              </Button>
            </Fragment>
          </InputGroup>
        );
      case 'K': // UIM卡 特殊
        return (
          <InputGroup
            compact
            className={
              classnames(
                'input-group',
                isNull === 'F' && 'required',
                'has-extra',
              )
            }
          >
            <Input
              addonBefore={cname}
              defaultValue={defaultValue}
              placeholder="请输入"
            />
            <Fragment>
              <Button>释放</Button>
              <Button>写白卡</Button>
            </Fragment>
          </InputGroup>
        );
      case 'ASC': // 选联系人
        return <AttrSelectContacts attr={attr} />;
      case 'ACC': // 选账户
        return <AttrSelectPanel attr={attr} type="ACC" />;
      case 'ASU': // 选使用者
        return <AttrSelectPanel attr={attr} type="ASU" />;
      case 'ASB': // 选银行
        return <AttrSelectPanel attr={attr} type="ASB" />;
      case 'ASN': // 选号码
        return <AttrSelectNumber attr={attr} />;
      case 'ASO': // 选经办人
        return <AttrSelectOperator attr={attr} />;
      default: return null;
    }
  }

  renderFormItem = (attr, key) => {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form.Item
        label={attr.title}
        className={style.formItem}
        key={key}
      >
        { getFieldDecorator(attr.fieldName)(
          <Fragment>
            {this.tranchsAttr(attr)}
          </Fragment>,
        ) }
      </Form.Item>
    );
  };

  render() {
    const { columns } = this.props;
    const formGridRow = [];
    return (
      <Form onSubmit={this.handleSubmit} layout="horizontal" className={style.form}>
        {
        columns.map((item, key) => {
          const { type } = item;
          if (type === 'formGrid') {
            const subData = item.data;
            for (let i = 0; i < subData.length; i += 3) {
              formGridRow.push(subData.slice(i, i + 3));
            }
            return (
              <div className={style.formGroup} key={key}>
                {
                  formGridRow.map((rows, rowIndex) => (
                    <Row gutter={15} key={`${key}${rowIndex}`}>
                      {
                        rows.map((col, colIndex) => (
                          <Col
                            span={24 / 3}
                            key={`${key}${rowIndex}${colIndex}`}
                          >
                            {this.renderFormItem(col)}
                          </Col>
                        ))
                      }
                    </Row>
                  ))
                }
              </div>
            );
          }
          return this.renderFormItem(item, key);
        })
      }
      </Form>
    );
  }
}

const switchAttrs = (attrs = [], methods = {}) => {
  // 1.属性分组, colspan为1的需要再包一层
  const colspan1List = attrs.filter(attr => attr.colspan !== '3');
  const colspan3List = attrs.filter(attr => attr.colspan === '3');
  let columns = [
    {
      type: 'formGrid',
      data: colspan1List,
    },
  ];
  columns = columns.concat(colspan3List);
  const { onAttrChange } = methods;
  const onValuesChange = (props, changedValues, allValues) => {
    if (typeof onAttrChange === 'function') {
      onAttrChange(changedValues, allValues);
    }
  };

  const WrapAttrForm = Form.create({ onValuesChange })(AttrForm);
  return (<WrapAttrForm columns={columns} />);
};

export {
  switchAttrs,
};
