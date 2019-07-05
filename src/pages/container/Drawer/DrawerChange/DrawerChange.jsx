import React, { Component } from 'react';
import {
  Row, Col, Button,
} from 'antd';
import labelClass from '$utils/laberClass';
import { PageDrawer, Label } from '$pages/components/PageLayouts';
import { PageData, PackageData } from './const';
import style from './DrawerChange.module.scss';

export default class DrawerChange extends Component {
  state = {}

  renderHead = (data) => {
    function renderNumbers(type, node) {
      if (node instanceof Array && node.length > 0) {
        return (
          type === '移' ?
            node.map((item, i) => (
              <span className={style.itemSpan} key={i}>
                {`[副]${item}`}
              </span>
            ))
            : node.map((item, i) => (
              <span className={style.itemSpan} key={i}>
                {item}
              </span>
            ))
        );
      } if (typeof node === 'string') {
        return type === '移' ? (
          <span className={style.itemSpan}>
            {`[主]${node}`}
          </span>
        )
          : (
            <span className={style.itemSpan}>
              {node}
            </span>
          );
      }
      return '';
    }
    if (data instanceof Array && data.length > 0) {
      return (
        <ul className={style.head}>
          {
            data.map((column, index) => (
              <li className={style.item} key={index}>
                {
                  (typeof column.type === 'string' && column.type) &&
                  <Label type={labelClass(column.type)}>{column.type}</Label>
                }
                <span className={style.itemTit}>
                  {`${column.title}:`}
                </span>
                {renderNumbers(column.type, column.master)}
                {renderNumbers(column.type, column.member)}
              </li>
            ))
          }
        </ul>
      );
    }
    return '';
  }

  renderColumn = (data) => {
    if (data instanceof Array && data.length > 0) {
      return (
        <div className={style.column}>
          {
            data.map((column, index) => (
              <dl key={index}>
                <dt>{column.title}</dt>
                {
                  (column.data instanceof Array && column.data.length > 0) && (
                    <dd>
                      <Row gutter={10}>
                        {
                          column.data.map((item, j) => (
                            <Col span={8} key={j} className={style.col}>
                              <Button>{item.name}</Button>
                            </Col>
                          ))
                        }
                      </Row>
                    </dd>
                  )
                }
              </dl>
            ))
          }
        </div>
      );
    }
    return null;
  }

  render() {
    const { visible, onClose } = this.props;
    return (
      <PageDrawer
        drawerProps={{
          title: '变更',
          visible,
          width: '480px',
          maskClosable: true,
          onClose: () => { onClose(); },
        }}
        bodyClass={style.drawer}
      >
        {this.renderHead(PackageData)}
        {this.renderColumn(PageData)}
      </PageDrawer>
    );
  }
}
