import React, { Component, Fragment } from 'react';
import {
  Button, Row, Col, Form, Input, Select, Empty, Tag,
} from 'antd';
import {
  PageHead, PagePanel, PageCell, PageFooter,
} from '$pages/components/PageLayouts';
import style from './CreatClient.module.scss';

const { Column } = PageCell;

export default class CreatClient extends Component {
  state = { }

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
      <div className={style.wrap}>
        <PageHead
          icon={<span className="iconfont ma-custer-hl" />}
          layout="fixed"
          title="新建客户"
        />
        <div className={style.container}>
          <PagePanel>
            <PageCell>
              <Column>
                <div className={style.info}>
                  <div className={style.pic}><img src="./assets/images/img-id-pic.png" alt="徐秀丽" /></div>
                  <div className={style.main}>
                    <Form layout="horizontal" className="form" {...formTwoLayout}>
                      <Row>
                        <Col span={12}>
                          <Form.Item wrapperCol={{ span: 24 }}>
                            <Input placeholder="输入客户名称" className={style.inputName} />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={gutter}>
                        <Col span={12}>
                          <Form.Item label="证件信息" required>
                            <div className={style.inputGroup}>
                              <Select placeholder="请选择" className={style.select}>
                                <Select.Option value="0">身份证</Select.Option>
                              </Select>
                              <Input placeholder="请输入" />
                              <Button>读取身份证</Button>
                            </div>
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item label="客户地址" required>
                            <Input placeholder="请输入" />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={gutter}>
                        <Col span={12}>
                          <Form.Item label="证件地址" required>
                            <Input placeholder="请输入" />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </div>
              </Column>
            </PageCell>
          </PagePanel>
          <PagePanel title="基础信息" size="large">
            <PageCell>
              <Column>
                <Form layout="horizontal" className="form" {...formItemLayout}>
                  <Row gutter={gutter}>
                    <Col span={8}>
                      <Form.Item label="客户分群">
                        <Select placeholder="请选择">
                          <Select.Option value="0">0</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item label="客户分群">
                        <Input placeholder="请输入" />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item label="客户分群">
                        <Select placeholder="请选择">
                          <Select.Option value="0">否</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={gutter}>
                    <Col span={8}>
                      <Form.Item label="服务归属地">
                        <Select placeholder="请选择">
                          <Select.Option value="0">0</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item label="营业厅：">
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
                      <Form.Item label="代理商标识">
                        <Select placeholder="请选择">
                          <Select.Option value="0">0</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Column>
            </PageCell>
          </PagePanel>
          <PagePanel title="联系信息" size="large">
            <PageCell>
              <Column>
                <Form layout="horizontal" className="form" {...formItemLayout}>
                  <Row gutter={gutter}>
                    <Col span={8}>
                      <Form.Item label="联系人" required>
                        <Select placeholder="请选择">
                          <Select.Option value="0">0</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item label="联系电话">
                        <Input placeholder="请输入" />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item label="家庭电话">
                        <Input placeholder="请输入" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={gutter}>
                    <Col span={8}>
                      <Form.Item label="办公电话">
                        <Input placeholder="请输入" />
                      </Form.Item>
                    </Col>
                    <Col span={16}>
                      <Form.Item label="通讯地址" {...formTwoLayout}>
                        <Input placeholder="请输入" />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Column>
            </PageCell>
          </PagePanel>
        </div>
        <PageFooter>
          <Button type="default" size="large">取消</Button>
          <Button type="default" size="large">拍照留存</Button>
          <Button type="default" size="large">身份核查</Button>
          <Button type="default" size="large" className="btn-warn">填写完成，创建客户</Button>
        </PageFooter>
      </div>
    );
  }
}
