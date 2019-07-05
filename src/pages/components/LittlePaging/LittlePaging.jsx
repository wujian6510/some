import React, { Component } from 'react';
import { Button } from 'antd';
import style from './LittlePaging.module.scss';

export default class LittlePaging extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: props.total ? props.total : 1,
      index: props.index ? props.index + 1 : 1,
    };
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      total: nextProps.total ? nextProps.total : 1,
      index: nextProps.index ? nextProps.index + 1 : 1,
    });
  }

  render() {
    const { total, index } = this.state;
    const { back, next } = this.props;
    return (
      <div className={style.group}>
        <Button shape="circle" size="small" onClick={back}>
          <span className="iconfont ma-back" />
        </Button>
        <div className={style.text}>{`${index}/${total}`}</div>
        <Button shape="circle" size="small" onClick={next}>
          <span className="iconfont ma-forward" />
        </Button>
      </div>
    );
  }
}
