import React, { Component } from 'react';
import { Popover, Row, Col } from 'antd';
import PageData from './const';
import style from './PopoverChangePackage.module.scss';

export default class PopoverChangePackage extends Component {
  renderColumns = (data) => {
    if (data instanceof Array && data.length > 0) {
      return (
        data.map((column, i) => (
          <dl key={i} className={style.dl}>
            <dt className={style.dt}>{column.title}</dt>
            {
              (column.data instanceof Array && column.data.length > 0) && (
                <dd className={style.dd}>
                  <Row gutter={15}>
                    {
                      column.data.map((item, j) => (
                        <Col key={j} span={4}>
                          <a className={style.item}>{item.label}</a>
                        </Col>
                      ))
                    }
                  </Row>
                </dd>
              )
            }
          </dl>
        ))
      );
    }
    return null;
  }

  render() {
    return (
      <Popover
        content={this.renderColumns(PageData)}
        overlayClassName={style.main}
      >
        {this.props.children}
      </Popover>
    );
  }
}
