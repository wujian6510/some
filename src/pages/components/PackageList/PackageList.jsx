import React, { Component } from 'react';
import {
  Empty, Row, Col, Tag,
} from 'antd';
import { Label } from '$pages/components/PageLayouts';
import labelClass from '$utils/laberClass';
import style from './PackageList.module.scss';

export default class PackageList extends Component {
  static defaultProps = {
    layout: 'horizontal', // horizontal(水平), vertical(垂直)
    data: [],
    gridSpan: 8,
  }

  renderHead = (filter, extra) => {
    if (React.isValidElement(filter) || (typeof extra === 'string' || React.isValidElement(extra))) {
      return (
        <div className={style.head}>
          <div>{filter}</div>
          <div>{extra}</div>
        </div>
      );
    }
    return null;
  }

  renderTiles = (data) => {
    const { gridSpan } = this.props;
    if (data instanceof Array && data.length > 0) {
      return (
        <div
          className={style.tiles}
        >
          <Row gutter={15}>
            {
              data.map((column, i) => (
                <Col
                  span={
                    typeof gridSpan === 'number' ? gridSpan : 8
                  }
                  key={i}
                >
                  <dl className={style.dl}>
                    <dt className={style.dt}>
                      <Label type={labelClass(column.type)}>{column.type}</Label>
                      {
                        typeof column.tag === 'string' && <Tag color="red">{column.tag}</Tag>
                      }
                    </dt>
                    <dd className={style.dd}>
                      <div className={style.tit}>{column.title}</div>
                      <div className={style.ctrl}>
                        {column.control}
                      </div>
                    </dd>
                  </dl>
                </Col>
              ))
            }
          </Row>
        </div>
      );
    }
    return <Empty />;
  }

  renderList = (data) => {
    if (data instanceof Array && data.length > 0) {
      return (
        <div className={style.list}>
          {
            data.map((column, i) => (
              <dl className={style.dl} key={i}>
                <dt className={style.dt}>
                  <Label type={labelClass(column.type)}>{column.type}</Label>
                  {
                    typeof column.tag === 'string' && <Tag color="red">{column.tag}</Tag>
                  }
                </dt>
                <dd className={style.dd}>{column.title}</dd>
                <dd className={style.ft}>
                  {column.control}
                </dd>
              </dl>
            ))
          }
        </div>
      );
    }
    return <Empty />;
  }

  renderContent = (layout, data) => {
    if (typeof layout === 'string') {
      switch (layout) {
        case 'horizontal':
          return this.renderTiles(data);
        case 'vertical':
          return this.renderList(data);
        default:
          return '';
      }
    }
    return null;
  }

  render() {
    const {
      filter,
      extra,
      layout,
      data,
    } = this.props;
    return (
      <div>
        {this.renderHead(filter, extra)}
        { this.renderContent(layout, data) }
      </div>
    );
  }
}
