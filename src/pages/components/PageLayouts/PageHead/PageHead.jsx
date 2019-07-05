import React, { Component } from 'react';
import { Steps } from 'antd';
import classnames from 'classnames';
import style from './PageHead.module.scss';

const { Step } = Steps;

export default class PageHead extends Component {
  renderDom= (node, nodeClass) => {
    if (
      (typeof node === 'string' && node.trim() !== '') ||
      React.isValidElement(node)
    ) {
      return <div className={style[nodeClass]}>{node}</div>;
    }
    return '';
  }

  renderSteps = (node) => {
    if (typeof node === 'object') {
      const { data, stepsProps, stepProps } = node;
      if (data instanceof Array) {
        return (
          <Steps
            current={0}
            size="small"
            {...stepsProps}
            className={style.steps}
          >
            {
              data.map((item, index) => (
                <Step
                  key={index}
                  title={item}
                  {...stepProps}
                />
              ))
            }
          </Steps>
        );
      }
    }
    if (React.isValidElement(node)) {
      return <div className={style.steps}>{node}</div>;
    }
    return '';
  }

  render() {
    const {
      icon,
      title,
      subtitle,
      extra,
      layout,
      steps,
      className,
      children,
    } = this.props;
    return (
      <div
        className={
          classnames(
            style.wrap,
            (typeof layout === 'string' && 'fixed') && 'fixed',
            className,
          )
        }
      >
        <div className={style.main}>
          { title || subtitle || extra ? (
            <div className={style.dl}>
              <div className={style.dt}>
                {this.renderDom(icon, 'icon')}
                {this.renderDom(title, 'title')}
                {this.renderDom(subtitle, 'subtitle')}
              </div>
              {this.renderDom(extra, 'extra')}
              {this.renderSteps(steps)}
            </div>
          ) : '' }
          {
            children ? (
              <div className={style.container}>
                {children}
              </div>
            ) : ''
          }
        </div>
      </div>
    );
  }
}
