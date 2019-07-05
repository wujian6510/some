import React, { Component } from 'react';
import { Alert } from 'antd';
import classnames from 'classnames';
import SearchForm from './SearchForm';
import style from './PageSearchList.module.scss';

export default class PageSearchList extends Component {
  static defaultProps = {
    btns: '',
    form: '',
  }

  renderAlert = (node) => {
    switch (true) {
      case typeof node === 'string':
        return <Alert className={style.alert} showIcon message={node} />;
      case node instanceof Object:
        return (
          <Alert
            showIcon
            className={style.alert}
            {...node}
          />
        );
      default:
        return null;
    }
  }

  render() {
    const {
      btns, form, layout, className, alertProps, children,
    } = this.props;
    return (
      <div className={classnames(style.container, className)}>
        <SearchForm
          btns={btns}
          form={form}
          layout={layout}
          className={style.form}
        />
        {this.renderAlert(alertProps)}
        <div className={style.main}>
          {children}
        </div>
      </div>
    );
  }
}
