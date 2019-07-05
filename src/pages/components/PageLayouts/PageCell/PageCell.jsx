import React, { Component } from 'react';
import classnames from 'classnames';
import style from './PageCell.module.scss';

class Column extends Component {
  renderNode = (node, className) => (
    (typeof node === 'string' || React.isValidElement(node)) && <div className={style[className]}>{node}</div>
  )

  render() {
    const { title, children } = this.props;
    return (
      <div className={style.column}>
        {this.renderNode(title, 'title')}
        <div className={style.main}>
          {children}
        </div>
      </div>
    );
  }
}

export default class PageCell extends Component {
  state = { }

  renderNode = (node, className) => (
    (typeof node === 'string' || React.isValidElement(node)) && <div className={style[className]}>{node}</div>
  )

  render() {
    const {
      children, className, footer,
    } = this.props;
    return (
      <div
        className={
          classnames(
            style.group,
            className,
          )
        }
      >
        {children}
        {this.renderNode(footer, 'footer')}
      </div>
    );
  }
}

PageCell.Column = Column;
