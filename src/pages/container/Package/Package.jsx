import React, { Component, Fragment } from 'react';
import {
  Tabs, Input, Checkbox, Divider, Popover,
} from 'antd';
import classnames from 'classnames';
import { PageTabs } from '$pages/components/PageLayouts';
import FilterTags from '$pages/components/FilterTags';
import PackageList from '$pages/components/PackageList';
import LittlePaging from '$pages/components/LittlePaging';
import { FilterData, PageData } from './const';
import style from './Package.module.scss';

const { TabPane } = Tabs;
const { Search } = Input;
const CheckboxGroup = Checkbox.Group;


export default class Package extends Component {
  state = {
    model: 'horizontal',
  }

  toggleModel = (model) => {
    if (typeof model === 'string') {
      this.setState({
        model,
      });
    }
  }

  renderCtrl = (item) => {
    const { layout } = this.props;
    return (
      <Fragment>
        <a>
          <span className="iconfont ma-buy" />
          购买
        </a>
        <a>
          <span
            className={
              (typeof item.collection === 'boolean' && item.collection) ?
                'iconfont ma-collection-on' : 'iconfont ma-collection-off'
            }
          />
          收藏
        </a>
        <Popover
          title="资费说明"
          content={typeof item.content === 'string' ? item.content : ''}
          trigger="hover"
          placement={layout === 'vertical' ? 'right' : 'bottom'}
        >
          <a>
            <span className="iconfont ma-info" />
            描述
          </a>
        </Popover>
      </Fragment>
    );
  }

  render() {
    const { model } = this.state;
    const FilterOptions = [
      {
        value: '0',
        label: '最近热销',
      },
      {
        value: '1',
        label: '最近常用',
      },
      {
        value: '2',
        label: '我的收藏',
      },
    ];
    const ListData = PageData.map(item => ({
      type: item.type,
      tag: item.tag,
      title: item.title,
      control: this.renderCtrl(item),
    }));
    return (
      <Fragment>
        <div className={style.head}>
          <PageTabs
            defaultActiveKey="0"
            className={style.tabs}
            tabBarExtraContent={(
              <Search
                placeholder="搜个套餐吧"
                style={{ width: 220 }}
              />
            )}
          >
            <TabPane tab="全部套餐" key="0" />
            <TabPane tab="我的收藏" key="1" />
            <TabPane tab="搜索结果" key="2" />
          </PageTabs>
        </div>
        <div className={style.container}>
          <FilterTags data={FilterData} />
          <PackageList
            filter={(
              <CheckboxGroup
                options={FilterOptions}
                defaultValue={['0']}
              />
            )}
            extra={(
              <Fragment>
                <LittlePaging />
                <a
                  className={
                  classnames(style.link, model === 'horizontal' && 'active')
                }
                  onClick={() => {
                    this.toggleModel('horizontal');
                  }}
                >
                卡片
                </a>
                <Divider type="vertical" />
                <a
                  className={
                  classnames(style.link, model === 'vertical' && 'active')
                }
                  onClick={() => {
                    this.toggleModel('vertical');
                  }}
                >
                列表
                </a>
              </Fragment>
            )}
            layout={model}
            data={ListData}
          />
        </div>
      </Fragment>
    );
  }
}
