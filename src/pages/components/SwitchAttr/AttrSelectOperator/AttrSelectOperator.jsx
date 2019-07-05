import React, { Component, Fragment } from 'react';
import {
  Select, Popover, Input, Tag, Button, Empty,
} from 'antd';
import classnames from 'classnames';
import style from './AttrSelectOperator.module.scss';
import PageData from './const';

const { Search } = Input;

export default class AttrSelectOperator extends Component {
  static defaultProps = {
    attr: {},
  }

  renderContent = data => (
    <Fragment>
      <div className={style.head}>
        <Input.Group compact className={style.group}>
          <Select defaultValue="0" className={style.select}>
            <Select.Option value="0">身份证</Select.Option>
          </Select>
          <Search className={style.input} placeholder="搜索经办人" />
        </Input.Group>
        <Button type="primary">读取身份证</Button>
      </div>
      {
        (PageData instanceof Array && PageData.length > 0) ? (
          <ul className={style.list}>
            {
              PageData.map((column, j) => (
                <li className={style.column} key={j}>
                  <dl className={style.dl}>
                    <dt className={style.dt}>
                      <span className={style.name}>{column.name}</span>
                      {`居民身份证：${column.id}`}
                    </dt>
                    <dd className={style.dd}>
                      <div className={style.item}>
                        <span className={style.itemTit}>证件地址：</span>
                        <span className={style.itemCont}>{column.address}</span>
                      </div>
                      <div className={style.item}>
                        <span className={style.itemTit}>联系电话：</span>
                        <span className={style.itemCont}>
                          <Input
                            placeholder="请输入"
                            defaultValue={column.tell}
                            className={style.input}
                          />
                        </span>
                      </div>
                    </dd>
                  </dl>
                  <div className={style.extra}>
                    <Button>选定</Button>
                  </div>
                </li>
              ))
            }
          </ul>
        ) : <Empty className={style.empty} />
      }
    </Fragment>
  )

  render() {
    const { attr } = this.props;
    return (
      <div className={style.wrap}>
        <Popover
          overlayClassName={style.dropdown}
          getPopupContainer={node => node}
          trigger="click"
          content={this.renderContent()}
        >
          <Input
            allowClear
            addonBefore={attr.cname}
            className={
              classnames(
                style.input,
                attr.isNull === 'F' && 'required',
              )
            }
            placeholder="请选择"
            suffix={
              <span className="iconfont ma-zoom" />
            }
          />
        </Popover>
      </div>
    );
  }
}
