import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import {
  Layout, Button,
} from 'antd';
import ShoppingCart from '$pages/container/ShoppingCart';
import { MenuData } from './const';
import style from './BaseLayout.module.scss';

const { Header } = Layout;

class BaseLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showShoppingCart: false,
    };
  }

  onToggleShoppingCart = () => {
    this.setState(prev => ({
      showShoppingCart: !prev.showShoppingCart,
    }));
  }

  render() {
    const { showShoppingCart } = this.state;
    return (
      <Fragment>
        { this.props.children }
        <div className={style.toolbar}>
          <div className={style.menu}>
            <Button
              htmlType="button"
              className={style.btn}
              onClick={() => {
                this.onToggleShoppingCart();
              }}
            >
              <span className="iconfont ma-shopping-cart" />
              <span className={style.span}>购物车</span>
            </Button>
          </div>
        </div>
        <ShoppingCart visible={showShoppingCart} onClose={this.onToggleShoppingCart} />
      </Fragment>
    );
  }
}


export default BaseLayout;
