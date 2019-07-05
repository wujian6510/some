import React, { Component, Fragment } from 'react';
import {
  Button, Row, Col, Form, Input, Select, Empty, Tag,
} from 'antd';
import CheckTiles from '$pages/components/CheckTiles';
import { PageHead, PagePanel } from '$pages/components/PageLayouts';
import LittlePaging from '$pages/components/LittlePaging';
import PageData from './const';
import style from './AccountInfo.module.scss';

import AttrSelectPanel from '$pages/components/SwitchAttr/AttrSelectPanel';

const { Option } = Select;
const InputGroup = Input.Group;
const { Search } = Input;

export default class AccountInfo extends Component {
  state = {
    visible: false,
  }

  onToggleMore=() => {
    this.setState(prev => ({
      visible: !prev.visible,
    }));
  }

  renderItems = (items) => {
    if (items instanceof Array && items.length > 0) {
      return (
        <ul className={style.list}>
          {
            items.map((item, i) => (
              <li className={style.item} key={i}>
                <dl className={style.dl}>
                  <dt className={style.dt}>
                    {item.name}
                    {item.number}
                  </dt>
                  <dd className={style.dd}>
                    <Tag color="blue">{item.label}</Tag>
                    {`账户名称：${item.account}`}
                  </dd>
                </dl>
                <div className={style.extra}>
                  <Button size="small">修改</Button>
                  <Button size="small">删除</Button>
                </div>
              </li>
            ))
          }
        </ul>
      );
    }
    return <Empty />;
  }

  render() {
    const { visible } = this.state;
    const gutter = 15;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const formFullLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 21 },
    };
    return (
      <div className={style.wrap}>
        <PageHead
          icon={<span className="iconfont ma-custer-hl" />}
          layout="fixed"
          title="账户信息"
        />
        <div className={style.container}>
          <div className={style.accounts}>
            <PagePanel
              title="账户列表"
              extra={<LittlePaging />}
              className={style.panel}
              footer={(
                <div className="text-center">
                  <a>
                    <span className="iconfont ma-plus" />
                    创建新账户
                  </a>
                </div>
              )}
            >
              {this.renderItems(PageData)}
            </PagePanel>
          </div>
          <div className={style.details}>
            <PagePanel
              title="信息详情"
              className={style.panel}
              footer={(
                <div className="text-right">
                  <Button>取消</Button>
                  <Button type="primary">确定</Button>
                </div>
            )}
            >
              <div className={style.group}>
                <Form layout="horizontal" className="form" {...formItemLayout}>
                  <Row gutter={gutter}>
                    <Col span={12}>
                      <Form.Item label="账户名称" required>
                        <Input placeholder="请输入" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="收费省" required>
                        <Select placeholder="请选择">
                          <Option value={0}>0</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={gutter}>
                    <Col span={12}>
                      <Form.Item label="投递方式">
                        <Select placeholder="请选择">
                          <Option value={0}>0</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={gutter}>
                    <Col span={12}>
                      <Form.Item label="收件人">
                        <Input placeholder="请输入" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="收件人电话">
                        <Input placeholder="请输入" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={gutter}>
                    <Col span={24}>
                      <Form.Item label="邮件地址" {...formFullLayout}>
                        <Input placeholder="请输入" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={gutter}>
                    <Col span={12}>
                      <Form.Item label="邮编">
                        <Input placeholder="请输入" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={gutter}>
                    <Col span={24}>
                      <Form.Item label="账户地址" {...formFullLayout}>
                        <Input placeholder="请输入" />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </div>
              <div className={style.group}>
                <div className={style.title}>支付方案</div>
                <Form layout="horizontal" className="form" {...formItemLayout}>
                  <Row>
                    <Col span={24}>
                      <Form.Item wrapperCol={{ span: 24 }}>
                        <CheckTiles
                          type="radio"
                          layout="inline"
                          data={[
                            {
                              label: '现金',
                              value: '0',
                            },
                            {
                              label: '银行托收',
                              value: '1',
                            },
                            {
                              label: '电子钱包',
                              value: '2',
                            },
                          ]}
                          groupProps={{
                            defaultValue: '0',
                          }}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={gutter}>
                    <Col span={12}>
                      <Form.Item label="开户银行">
                        <AttrSelectPanel
                          type="ASB"
                          attr={{
                            attrValueTypeId: 'ASB',
                            fieldName: 'acct_id',
                            isEdit: 'T',
                            isNull: 'F',
                            orderId: '4',
                            valueDesc: 'null',
                          }}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="银行账户">
                        <Input placeholder="请输入" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={gutter}>
                    <Col span={12}>
                      <Form.Item label="结算户名">
                        <Input placeholder="请输入" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="缴费方式">
                        <Input placeholder="请输入" />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </div>
            </PagePanel>
          </div>
        </div>
      </div>
    );
  }
}
