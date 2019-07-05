import React, { Component } from 'react';
import { PagePanel, PageCell } from '$pages/components/PageLayouts';
import { EachForm } from '$pages/components/FormElement';
import { switchAttrs } from '$pages/components/SwitchAttr';
import CheckTiles from '$pages/components/CheckTiles';
import style from './BroadbandService.module.scss';

const { Column } = PageCell;

export default class BroadbandService extends Component {
  state = { }

  cloumnModule = () => ([
    {
      title: '号码',
      data: switchAttrs([
        {
          attrValueTypeId: '98A',
          colspan: '1',
          fieldName: 'contact_info',
          isEdit: 'T',
          isNull: 'F',
          orderId: '1',
          value: '肖旭章 17787299324',
          valueDesc: '肖旭章 17787299324',
        },
      ]),
    },
    {
      title: '提速方式',
      data: <CheckTiles
        layout="inline"
        data={[
          {
            label: '单宽带标准包月套餐提速，包年续费',
            value: '0',
          },
          {
            label: '单宽带标准包月套餐提速，包月续费',
            value: '1',
          },
          {
            label: '单宽带用户，新装手机办理自主版套餐提速（速率100M以上）',
            value: '2',
          },
        ]}
        groupProps={{
          value: ['0'],
        }}
      />,
    },
    {
      title: '速率选择',
      data: (
        <div className={style.info}>
          <p>当前速率：12M</p>
          <p>装机地址：南宁青秀区城区浦路6号金湖帝景小区 A 栋20层205</p>
          <p>最大速率：200M</p>
          <div className={style.ctrl}>
            <CheckTiles
              layout="inline"
              data={[
                {
                  label: '200M',
                  value: '0',
                },
              ]}
              groupProps={{
                defaultValue: ['0'],
              }}
            />
          </div>
        </div>
      ),
    },
  ])

  render() {
    return (
      <PagePanel size="large">
        <PageCell>
          <Column>
            {EachForm(this.cloumnModule())}
          </Column>
        </PageCell>
      </PagePanel>
    );
  }
}
