import React, { Component } from 'react';
import { Empty, Spin } from 'antd';
import history from '$src/routes/history';
import style from './PageState.module.scss';

class Loading extends Component {
  render() {
    return (
      <div className={style.container}>
        <Spin />
      </div>
    );
  }
}

class Building extends Component {
  render() {
    return (
      <div className={style.container}>
        <Empty description="开发中" />
      </div>
    );
  }
}

const pageStates = {};

const PageState = (_pathname, _component, _container) => {
  const { pathname } = history.location;
  let resCpmponent = null;
  let resContainer = null;
  if (pathname === _pathname || pageStates[_pathname]) {
    resCpmponent = _component;
    resContainer = _container;
    pageStates[_pathname] = true;
  } else {
    resCpmponent = () => {};
    resContainer = Loading;
  }
  return {
    resContainer,
    resCpmponent,
  };
};

export default PageState;
