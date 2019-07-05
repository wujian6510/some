import React, { Component } from 'react';
import classnames from 'classnames';
import style from './SearchForm.module.scss';

export default class SearchForm extends Component {
  renderNodeType = (nodeType) => {
    switch (true) {
      case nodeType === 'btns':
        return nodeType;
      case nodeType === 'form':
        return nodeType;
      default:
        return '';
    }
  }

  renderDomType = (domType) => {
    if (typeof domType === 'string') {
      switch (true) {
        case domType === 'block':
          return domType;
        default:
          return '';
      }
    }
    return false;
  }

  renderNode = (node, type) => {
    if (
      (typeof node === 'string' && node.trim() !== '') ||
      React.isValidElement(node)
    ) {
      return (
        <div
          key={`layout-dom-${type}`}
          className={style[this.renderNodeType(type)]}
        >
          {node}
        </div>
      );
    }
    return false;
  }

  render() {
    const {
      btns, form, layout, className,
    } = this.props;
    if (
      (typeof btns === 'string' || React.isValidElement(btns)) ||
      (typeof form === 'string' || React.isValidElement(form))
    ) {
      return (
        <div
          className={
            classnames(
              style.container,
              this.renderDomType(layout),
              className,
            )
          }
        >
          {
           layout === 'block' ? ([
             this.renderNode(form, 'form'),
             this.renderNode(btns, 'btns'),
           ]) : ([
             this.renderNode(btns, 'btns'),
             this.renderNode(form, 'form'),
           ])
         }
        </div>
      );
    }
    return false;
  }
}
