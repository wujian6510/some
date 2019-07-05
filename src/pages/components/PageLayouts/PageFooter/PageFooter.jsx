import React, { Component } from 'react';
import style from './PageFooter.module.scss';

export default class PageFooter extends Component {
  state = { }

  render() {
    const { extra, children } = this.props;
    return (
      <div className={style.wrap}>
        <div className={style.container}>
          {
            (typeof extra === 'string' || React.isValidElement(extra)) &&
            extra
          }
          <div className={style.main}>{children}</div>
        </div>
      </div>
    );
  }
}
