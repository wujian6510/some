import React, { Component } from 'react';
import {
  Checkbox, Row, Col, Empty, Radio,
} from 'antd';
import classnames from 'classnames';
import style from './CheckTiles.module.scss';

export default class CheckTiles extends Component {
  state = { }

  static defaultProps = {
    data: [],
    gridSpan: 8,
    layout: 'grid',
    type: 'checkbox',
  }

  format = (data, index, fn) => {
    const {
      type,
    } = this.props;
    switch (type) {
      case 'radio':
        return (
          <Radio
            value={typeof data.value === 'string' ? data.value : index}
            className={classnames(style.col)}
          >
            <span
              className={
                  classnames(style.tag, 'iconfont ma-select-tag')}
            />
            {
              fn instanceof Function ?
                fn(data, index)
                : (typeof data.label === 'string' && (
                <div className={style.label}>
                  {data.label}
                </div>
                ))
            }
            { this.props.children && (
              <div className={style.content}>
                {this.props.children}
              </div>
            )}
          </Radio>
        );
      case 'checkbox':
        return (
          <Checkbox
            value={typeof data.value === 'string' ? data.value : index}
            className={classnames(style.col)}
          >
            <span
              className={
                  classnames(style.tag, 'iconfont ma-select-tag')}
            />
            {
              fn instanceof Function ?
                fn(data, index)
                : (typeof data.label === 'string' && (
                <div className={style.label}>
                  {data.label}
                </div>
                ))
            }
            { this.props.children && (
              <div className={style.content}>
                {this.props.children}
              </div>
            )}
          </Checkbox>
        );
      default:
        return null;
    }
  }

  renderItems = (data) => {
    const {
      gridSpan, layout, render,
    } = this.props;
    if (typeof layout === 'string') {
      switch (layout) {
        case 'grid':
          return (
            <Row gutter={15}>
              {
                data.map((column, i) => (
                  <Col span={gridSpan} key={i}>
                    { this.format(column, i, render) }
                  </Col>
                ))
              }
            </Row>
          );
        case 'inline':
          return (
            data.map((column, i) => (
              <div className={style.inline} key={i}>
                {this.format(column, i, render)}
              </div>
            ))
          );
        default:
          return null;
      }
    }
    return null;
  }


  renderColumn = () => {
    const {
      data, type, className, groupProps, onChange,
    } = this.props;
    if (data instanceof Array && data.length > 0) {
      switch (type) {
        case 'radio':
          return (
            <Radio.Group
              onChange={(value) => {
                if (onChange instanceof Function) {
                  onChange(value);
                }
              }}
              {...groupProps}
              className={
                classnames(
                  style.group,
                  className,
                )
              }
            >
              {this.renderItems(data)}
            </Radio.Group>
          );
        case 'checkbox':
          return (
            <Checkbox.Group
              onChange={(value) => {
                if (onChange instanceof Function) {
                  onChange(value);
                }
              }}
              {...groupProps}
              className={
                classnames(
                  style.group,
                  className,
                )
              }
            >
              {this.renderItems(data)}
            </Checkbox.Group>
          );
        default:
          return null;
      }
    }

    return null;
  }

  render() {
    return this.renderColumn();
  }
}
