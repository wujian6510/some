import React, { Fragment } from 'react';
import {
  Row, Col, Form, Checkbox, Tag,
} from 'antd';
import classnames from 'classnames';
import style from './FormElement.module.scss';

const CheckboxGroup = Checkbox.Group;

const FormContent = (props) => {
  const formGridCol = [];
  const {
    data, type, attr, grid, onClose,
  } = props;
  const initGrid = number => (
    typeof number === 'number' ? number : 3
  );
  if (React.isValidElement(data)) {
    return data;
  }
  if (data instanceof Array && data.length > 0) {
    switch (type) {
      case 'checkboxGrid': {
        const { defaultValue, disabled } = attr;
        return (
          <CheckboxGroup
            className={style.checkboxGrid}
            defaultValue={defaultValue}
            disabled={disabled}
          >
            <Row className={style.row} gutter={15}>
              {data.map((item, index) => (
                <Col span={12} key={index} className={style.col}>
                  <Checkbox value={item.value}>{item.label}</Checkbox>
                  { React.isValidElement(item.extra) && item.extra}
                </Col>
              ))}
            </Row>
          </CheckboxGroup>
        );
      }
      case 'tags':
        return (
          <div className={style.tags}>
            <div className={style.list}>
              {
                data.map((item, index) => (
                  <Tag
                    className={classnames(style.tag, item.closable && 'close')}
                    closable={item.closable}
                    key={index}
                  >
                    {item.label}
                  </Tag>
                ))
              }
            </div>
          </div>
        );
      case 'formGrid':
        for (let i = 0; i < data.length; i += initGrid(grid)) {
          formGridCol.push(data.slice(i, i + initGrid(grid)));
        }
        return (
          <Fragment>
            {
              formGridCol.map((col, i) => (
                <Row gutter={15} key={i}>
                  {
                    col.map((item, j) => (
                      <Col
                        span={24 / initGrid(grid)}
                        key={j}
                      >
                        <Form.Item className={item.strong ? 'strong' : ''} label={item.title}>
                          {
                            item.control ? <div className={style.dt}>{item.control}</div> : null
                          }
                          <div className={style.dd}>
                            {
                              FormContent({
                                data: item.data,
                                type: item.type,
                                attr: item.attr,
                                grid: item.grid,
                              })
                            }
                          </div>
                        </Form.Item>
                      </Col>
                    ))
                  }
                </Row>
              ))
            }
          </Fragment>
        );
      default:
        break;
    }
  }
  return null;
};

/*
表单列表(data)：
title: 标题 (string):表单的标题
control: 操作 (string/reactNode)：表单的操作
visible: 收起，展开操作
*/
const FormItem = (title, control, node, attr = {}, key, visible = true) => (
  <div
    className={style.formItem}
    {...attr}
    key={key}
  >
    <div className={style.label}>{title}</div>
    {
      control ? <div className={style.dt}>{control}</div> : null
    }
    <div className={classnames(style.dd, !visible ? 'hide' : '')}>
      { FormContent(node)}
    </div>
  </div>
);


const EachForm = (data) => {
  if (data instanceof Array && data.length > 0) {
    return (
      <div>
        {
          data.map((item, key) => (
            FormItem(
              item.title,
              item.control,
              {
                data: item.data,
                type: item.type,
                attr: item.attr,
                grid: item.grid,
              },
              null,
              key,
              item.visible,
            )
          ))
        }
      </div>
    );
  }
  return null;
};
export {
  FormItem,
  EachForm,
  FormContent,
};
