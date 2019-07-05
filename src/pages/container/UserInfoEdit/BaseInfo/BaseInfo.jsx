import React, { Component, Fragment } from 'react';
import {
  Button, Table, Input, Row, Col, Form, Select, DatePicker, Popover,
} from 'antd';
import ClientOrientation from '$pages/components/ClientOrientation';
import { PageCell } from '$pages/components/PageLayouts';
import style from './BaseInfo.module.scss';

const { Column } = PageCell;

export default class BaseInfo extends Component {
  state = { }

  renderEditPassword = () => {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    return (
      <Form layout="horizontal" className="form" {...formItemLayout}>
        <Form.Item label="原密码">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="新密码">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item labelCol={{ span: 0 }} wrapperCol={{ span: 24 }}>
          <Row gutter={15}>
            <Col span={12}>
              <Button type="primary" block>确定</Button>
            </Col>
            <Col span={12}>
              <Button block>取消</Button>
            </Col>
          </Row>

        </Form.Item>
      </Form>
    );
  }

  render() {
    const gutter = 15;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const formTwoLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 21 },
    };
    return (
      <div>
        <PageCell
          className={style.panel}
        >
          <Column>
            <div className={style.info}>
              <div className={style.pic}><img src="./assets/images/img-id-pic.png" alt="徐秀丽" /></div>
              <div className={style.main}>
                <div className={style.name}>徐秀丽</div>
                <div className={style.row}>
                  <div className={style.col}>
                    <span className={style.colTit}>证件信息：</span>
                    <span className={style.span}>居民身份证</span>
                    <span className={style.span}>61052********732X</span>
                    <a className={style.span}>读取身份证</a>
                  </div>
                  <div className={style.col}>
                    <span className={style.colTit}>客户编码：</span>
                    2039408018471301845534
                  </div>
                  <div className={style.col}>
                    <span className={style.colTit}>初始密码：</span>
                    <span className={style.span}>********</span>
                    <Popover content={this.renderEditPassword()}>
                      <a className={style.span}>
                        <span className="iconfont ma-edit" />
                      </a>
                    </Popover>
                  </div>
                  <div className={style.col}>
                    <span className={style.colTit}>发证机关：</span>
                    南宁市公安局
                  </div>
                </div>
                <div className={style.row}>
                  <div className={style.col}>
                    <span className={style.colTit}>客户地址：</span>
                    广西南宁市青秀区金湖路2号
                  </div>
                  <div className={style.col}>
                    <span className={style.colTit}>证件地址：</span>
                    广西南宁市青秀区金湖路2号
                  </div>
                </div>
              </div>
            </div>
          </Column>
        </PageCell>
        <PageCell
          className={style.panel}
        >
          <Column>
            <Form layout="horizontal" className="form" {...formItemLayout}>
              <Row gutter={gutter}>
                <Col span={8}>
                  <Form.Item label="客户状态">
                    <Select placeholder="请选择">
                      <Select.Option value="0">0</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="代理商标识">
                    <Select placeholder="请选择">
                      <Select.Option value="0">0</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="城乡标识" required>
                    <Select placeholder="请选择">
                      <Select.Option value="0">0</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={gutter}>
                <Col span={8}>
                  <Form.Item label="本地网">
                    <Select placeholder="请选择">
                      <Select.Option value="0">0</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="营业厅">
                    <Select placeholder="请选择">
                      <Select.Option value="0">0</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="公话属性">
                    <Select placeholder="请选择">
                      <Select.Option value="0">0</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={gutter}>
                <Col span={8}>
                  <Form.Item label="创建时间">
                    <DatePicker style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="入网时间">
                    <DatePicker style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="资料变更时间">
                    <DatePicker style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={gutter}>
                <Col span={8}>
                  <Form.Item label="重要客户级别">
                    <Select placeholder="请选择">
                      <Select.Option value="0">0</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={16}>
                  <Form.Item label="备注" {...formTwoLayout}>
                    <Input placeholder="请输入" />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Column>
        </PageCell>
      </div>
    );
  }
}
