import React, { Component } from 'react';
import {
  Tag,
} from 'antd';
import classnames from 'classnames';
import style from './FilterTags.module.scss';

const { CheckableTag } = Tag;

export default class FilterTags extends Component {
  state = {
    defaultCheckeds: [],
  };

  static defaultProps = {
    data: [],
    checkeds: [],
  }

  componentDidMount() {
    const { data } = this.props;
    if (data instanceof Array && data.length > 0) {
      data.forEach((item, index) => {
        this.setState(perv => ({
          defaultCheckeds: [
            ...perv.defaultCheckeds,
            `${index}-0`,
          ],
        }));
      });
      // 默认选中第一个
    }
  }

  defaultChange = (key) => {
    const { defaultCheckeds } = this.state;
    if (typeof key === 'string') {
      if (defaultCheckeds.some(item => (item === key))) {
        this.setState(prev => ({
          defaultCheckeds: prev.defaultCheckeds.filter(item => (item !== key)),
        }));
      } else {
        this.setState(prev => ({
          defaultCheckeds: [
            ...prev.defaultCheckeds,
            key,
          ],
        }));
      }
    }
  }

  isChecked = (key, checkeds) => checkeds.some(item => (item === key))

  isPropsKey = (key, defaultKey) => (typeof key === 'string' ? key : defaultKey)

  isPropsChange = (fn, key, defaultKey) => {
    if (fn instanceof Function) {
      fn(this.isPropsKey(key, defaultKey));
    } else {
      this.defaultChange(this.isPropsKey(key, defaultKey));
    }
  }

  isPropsCheckeds = (fn) => {
    const { defaultCheckeds } = this.state;
    const { checkeds } = this.props;
    if (fn instanceof Function) {
      return checkeds;
    }
    return defaultCheckeds;
  }

  renderData = (data, i) => {
    const { onChange } = this.props;
    switch (true) {
      case data instanceof Array:
        return (
          <dd>
            {
              data.map((item, j) => (
                <CheckableTag
                  checked={
                    this.isChecked(
                      this.isPropsKey(item.value, `${i}-${j}`),
                      this.isPropsCheckeds(onChange),
                    )
                  }
                  onChange={
                    () => {
                      this.isPropsChange(
                        onChange,
                        item.value, `${i}-${j}`,
                      );
                    }
                  }
                  className={style.item}
                  key={this.isPropsKey(item.value, `${i}-${j}`)}
                >
                  {typeof item.value === 'string' ? item.label : item}
                </CheckableTag>
              ))
            }
          </dd>
        );
      case React.isValidElement(data):
        return (
          <dd>{data}</dd>
        );
      default:
        return null;
    }
  }

  renderFilter = (data) => {
    const { className } = this.props;
    if (data instanceof Array && data.length > 0) {
      return (
        <div className={classnames(style.column, className)}>
          {
            data.map((column, i) => (
              <dl key={i}>
                { typeof column.title === 'string' && <dt>{column.title}</dt> }
                { this.renderData(column.data, i) }
              </dl>
            ))
          }
        </div>
      );
    }
    return '';
  }

  render() {
    const { data } = this.props;
    return this.renderFilter(data);
  }
}
