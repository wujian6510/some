/**
 * 将路由配置转路由组件
 */
import {
  HashRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import React, { Fragment } from 'react';
import PageState from '$pages/components/PageState/PageState';
import classnames from 'classnames';
// import { injectReducer } from '../store/reducers';

/**
 * 将路由信息扁平化，继承上一级路由的 path
 * @param {Array} config 路由配置
 */
function recursiveRouterConfigV4(config = []) {
  const routeArr = [];
  // debugger;
  config.forEach((item) => {
    const route = {
      ...item,
    };
    if (Array.isArray(item.children)) {
      route.childRoutes = recursiveRouterConfigV4(item.children);
    }
    routeArr.push(route);
  });
  return routeArr;
}

/**
 * 将路由转换成router4的组件
 * @param {Array} router recursiveRouterConfigV4处理后的路由
 * @param {String} contextPath 路由basename配置
 * @param {Object} eventHooks 全局事件，暂只支持beforeEnter
 */
const renderRouterConfigV4 = (router, contextPath, eventHooks) => {
  const routeChildren = [];
  const renderRoute = (routeContainer, routeItem, routeContextPath) => {
    const {
      path, onEnter, component, layout, className, keepAlive, childRoutes, reducer, redirect,
    } = routeItem;
    let routePath;
    if (!path) {
      console.error('route must has `path`');
    } else if (path === '/' || path === '*') {
      routePath = path;
    } else {
      routePath = `/${routeContextPath}/${path}`.replace(/\/+/g, '/');
    }

    // reducer处理
    // if (reducer) {
    //   injectReducer(store, reducer);
    // }
    // 优先使用当前定义的 layout
    routeContainer = layout || routeContainer;
    if (!(routeContainer || onEnter)) {
      throw new Error('请配置相应的layout组件');
    }

    const routeInfo = { ...routeItem, path: routePath };

    const renderRouteDom = (props, keep) => {
      let redirectTo = null;
      let replaceComponent = component;
      if (eventHooks && typeof eventHooks.beforeEnter === 'function') {
        redirectTo = eventHooks.beforeEnter(props, routeInfo, component);
      }

      if (!redirectTo) {
        if (typeof onEnter === 'function') {
          redirectTo = onEnter(props, routeInfo, component);
        }
      }
      if (typeof redirectTo === 'string' && redirectTo !== '') {
        return (<Redirect to={redirectTo} />);
      } if (typeof redirectTo === 'object' && redirectTo.$$typeof) {
        return React.createElement(
          routeContainer,
          props,
          redirectTo,
        );
      }
      if (redirectTo) {
        replaceComponent = redirectTo;
      }

      if (keep) {
        const {
          resContainer,
          resCpmponent,
        } = PageState(routePath, replaceComponent, routeContainer);
        return (
          <div
            className={
              classnames(
                'page',
                props.location.pathname === routePath ? 'open' : 'hide',
                className,
              )
            }
          >
            {
            React.createElement(
              resContainer,
              props,
              React.createElement(resCpmponent, props),
            )
          }
          </div>
        );
      }
      // 如果是存活的路由则用显示隐藏的方式

      return (
        <div
          className={classnames('page', className)}
        >
          {
            React.createElement(
              routeContainer,
              props,
              React.createElement(replaceComponent, props),
            )
          }
        </div>
      );
    };
    // 默认带卸载的路由显示方式

    if (redirect) {
      routeChildren.push(
        <Redirect key={routePath} exact from={routePath} to={redirect} />,
      );
    } else if (component || onEnter) {
      if (keepAlive) {
        routeChildren.push(
          <Route
            key={routePath}
            exact
            path={routePath}
          >
            {props => (renderRouteDom(props, keepAlive))}
          </Route>,
        );
      } else {
        routeChildren.push(
          <Route
            key={routePath}
            exact
            path={routePath}
            render={props => renderRouteDom(props, keepAlive)}
          />,
        );
      }
    }

    // 存在子路由，递归当前路径，并添加到路由中
    if (Array.isArray(childRoutes)) {
      childRoutes.forEach((r) => {
        renderRoute(routeContainer, r, routePath);
      });
    }
  };

  router.forEach((r) => {
    renderRoute(null, r, contextPath);
  });

  return <Router><Fragment>{routeChildren}</Fragment></Router>;
};

/**
 * 暴露的路由配置转路由组件方法
 * @param {Array} routerConfig 路由配置
 * @param {String} contextPath 路由basename配置
 */
const renderRouter = (routerConfig, contextPath, eventHooks) => (
  renderRouterConfigV4(recursiveRouterConfigV4(routerConfig), contextPath, eventHooks)
);

export default renderRouter;
