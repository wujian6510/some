import React, { Component, Fragment } from 'react';
import {
  Form, Input, Button, Select, Divider, Icon,
} from 'antd';
import { FilterData, PageData } from './const';
import FilterTags from '$pages/components/FilterTags';
import CheckTiles from '$pages/components/CheckTiles';
import LittlePaging from '$pages/components/LittlePaging';
import style from './NewNumber.module.scss';

const InputGroup = Input.Group;
const { Option } = Select;

export default class NewNumber extends Component {
  state = {
    more: false,
    selected: [],
  }

  renderFilterForm = () => (
    <Form layout="inline" className={style.formInline}>
      <Form.Item>
        <InputGroup compact style={{ width: '360px' }}>
          <Select
            placeholder="按证件号码查询"
            defaultValue="0"
            style={{ width: '40%' }}
          >
            <Option value="0">按证件号码查询</Option>
            <Option value="1">随机</Option>
            <Option value="2">匹配</Option>
            <Option value="3">精确</Option>
            <Option value="4">密码预占</Option>
          </Select>
          <Input placeholder="输入证件号码" style={{ width: '60%' }} />
        </InputGroup>
      </Form.Item>
      <Form.Item>
        <Button type="primary">查询</Button>
      </Form.Item>
      <Form.Item>
        <Button
          onClick={() => {
            this.setState(prev => ({
              more: !prev.more,
            }));
          }}
        >
          <Icon type={this.state.more ? 'up' : 'down'} />
          高级
        </Button>
      </Form.Item>
    </Form>
  )

  onSelected = (index) => {
    this.setState({
      selected: [index],
    });
  }

  render() {
    const { more, selected } = this.state;
    return (
      <Fragment>
        <div className={style.head}>
          <div className={style.filterbar}>
            {this.renderFilterForm()}
            <a>换一组</a>
          </div>
          {
            more && (
              <FilterTags data={[
                {
                  title: '号码池',
                  data: (
                    <Select
                      showSearch
                      style={{ width: '360px' }}
                      placeholder="请选择"
                    >
                      <Option value="0">18108888653——18190888861</Option>
                      <Option value="1">13808888653——13890888861</Option>
                      <Option value="2">19008888653——19090888861</Option>
                    </Select>

                  ),
                },
                ...FilterData,
              ]}
              />
            )
          }
        </div>
        <div className={style.container}>
          <div className={style.main}>
            <CheckTiles
              data={PageData}
              className={style.list}
              groupProps={{
                value: selected,
              }}
              render={(result, index) => (
                <dl className={style.dl}>
                  <dt className={style.dt}>
                    <div className={style.tit}>{result.number}</div>
                  </dt>
                  <dd className={style.dd}>
                    <div className={style.col}>
                      预存话费:
                      <span className={style.strong}>{result.prestore}</span>
                    </div>
                    <div className={style.col}>
                      最低消费:
                      <span className={style.strong}>{result.prestore}</span>
                    </div>
                  </dd>
                  <dd className={style.ctrl}>
                    <a onClick={() => { this.onSelected(index); }}>设为主卡</a>
                    <Divider type="vertical" />
                    <a onClick={() => { this.onSelected(index); }}>设为副卡</a>
                  </dd>
                </dl>
              )}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
