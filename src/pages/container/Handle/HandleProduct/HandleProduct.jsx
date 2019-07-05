import React, { Component, Fragment } from 'react';
import { Button, Icon, Tag } from 'antd';
import { PagePanel, PageCell } from '$pages/components/PageLayouts';
import { EachForm } from '$pages/components/FormElement';
import { switchAttrs } from '$pages/components/SwitchAttr';
import {
  DrawerNumber, // 选号码
  DrawerTerminal, // 选终端
  DrawerOptionPackage, // 选可选包
  DrawerFunction, // 选功能产品
} from '$pages/container/Drawer';
import style from '../Handle.module.scss';

const { Column } = PageCell;

export default class HandleProduct extends Component {
  constructor(props) {
    super(props);
    const { product, offerInst } = props;
    const {
      prodId, prodName, prodRole, roleButton,
    } = product;
    this.offerInst = offerInst;
    this.prodId = prodId;
    this.hasSelectNum = false;
    this.state = {
      visibleQuickNum: false,
      visibleTerminal: false,
      visibleOptionPackage: false,
      visibleFunction: false,
      attrAll: [],
      prodName, // 产品名称
      prodRole, // 产品成员角色列表
      roleButton, // 按钮列表
    };
  }

  // 加载产品属性
  renderProdAttr = (prodRole, index) => {
    const { attrAll } = this.state;
    const { prodAttr, prodInstId } = prodRole;
    let { prodAttrList } = prodAttr;
    if (prodAttrList) {
      prodAttrList = (attrAll.indexOf(index) !== -1) ?
        prodAttrList
        : prodAttrList.filter(attr => attr.showType === 'D');
    }
    const methods = {
      openSelectNumber: () => this.openSelectNumber(prodInstId, index),
      onSelectNumber: this.onSelectNumber,
    };
    return switchAttrs(prodAttrList, methods);
  }

  // 加载可选包
  renderProdSubOffer = (prodRole) => {
    const { prodRoleId, prodInstId, prodSubOffer } = prodRole;
    const subOfferList = [];
    const prodSubOfferTypeList = prodSubOffer.prodSubOfferTypeList || [];
    prodSubOfferTypeList.map((prodSubOfferType) => {
      const { prodSubOfferList, rstrType, rstrTypeDesc } = prodSubOfferType;
      const defaultValue = [];
      const data = prodSubOfferList.map((item) => {
        item.value = item.offerId;
        item.label = item.offerName;
        if (rstrType === '1200') { // 必选 选中并且不可编辑
          defaultValue.push(item.offerId);
        }

        if (item.rstrMktRes || item.rstrAttr) { // 可选 处理的终端 属性标签
          item.extra = (
            <Fragment>
              {item.rstrMktRes ? <Tag color="blue">终端</Tag> : ''}
              {item.rstrAttr ? <Tag color="blue">属性</Tag> : ''}
            </Fragment>
          );
        }
        return item;
      });

      subOfferList.push({
        title: rstrTypeDesc,
        strong: true,
        data,
        attr: {
          defaultValue,
          disabled: rstrType === '1200',
        },
        type: 'checkboxGrid',
      });

      return null;
    });

    const prodSubOfferTypeListAdd = prodSubOffer.prodSubOfferTypeListAdd || [];
    subOfferList.push({ // 加选
      title: '加选',
      strong: true,
      control: <a onClick={() => { this.openDrawerOptionPackage(prodInstId, prodRoleId); }}>添加</a>,
      data: prodSubOfferTypeListAdd,
      attr: {
        defaultValue: prodSubOfferTypeListAdd.map(offer => offer.offerId),
      },
      type: 'checkboxGrid',
    });
    return subOfferList;
  }

  // 加载功能产品
  renderProdFunc = (prodFunc) => {
    let { prodFuncList } = prodFunc;
    prodFuncList = prodFuncList.map((func) => {
      func.value = func.prodInstId;
      func.label = func.prodName;
      func.closable = func.selected === 'T';
      return func;
    });
    return prodFunc.isShow === 'T' ? prodFuncList : [];
  }

  // 加载底部按钮
  renderFootBtns = roleButton => (
    <Fragment>
      {
          roleButton.map((button, index) => {
            const {
              buttonName, currentNum, maxNum, prodRoleId,
            } = button;
            return (
              <Button
                htmlType="button"
                type="primary"
                key={index}
                onClick={() => { this.onAddPanels(prodRoleId, index); }}
              >
                {`${buttonName}(${currentNum}/${maxNum})`}
              </Button>
            );
          })
        }
    </Fragment>
  )

  columnModule = prodRole => prodRole.map((item, index) => {
    const { isShow, mktRes } = item;
    const { attrAll } = this.state;
    if (isShow === 'T') {
      const column = [
        {
          title: '产品属性',
          control: (
            <a onClick={() => {
              if (attrAll.indexOf(index) !== -1) {
                this.setState(prev => ({
                  attrAll: prev.attrAll.filter(a => (a !== index)),
                }));
              } else {
                this.setState(prev => ({
                  attrAll: [
                    ...prev.attrAll,
                    index,
                  ],
                }));
              }
            }}
            >
              {attrAll.indexOf(index) !== -1 ? '收起' : '更多'}
            </a>
          ),
          data: this.renderProdAttr(item, index),
          type: 'formGrid',
          grid: 1, // 一列
        },
        {
          title: '可选包',
          control: (
            <a onClick={() => { this.toggleSubOffers(item.prodInstId); }}>
              {item.openSubOffers ? '展开' : '收起'}
            </a>
          ),
          visible: !item.openSubOffers,
          data: this.renderProdSubOffer(item),
          type: 'formGrid',
          grid: 1, // 一列
        },
        {
          title: '功能产品',
          control: (
            <a onClick={() => { this.openDrawerFunction(item); }}>添加</a>
          ),
          data: this.renderProdFunc(item.prodFunc),
          type: 'tags',
        },
      ];
      if (mktRes.isShow === 'T') { // 显示终端设备
        column.push(
          {
            title: '终端设备',
            control: (
              <a onClick={() => { this.openSelectTerminal(); }}>添加</a>
            ),
            data: [],
            type: 'tags',
          },
        );
      }
      return {
        prodInstId: item.prodInstId,
        title: item.prodRoleName,
        deleteFlag: item.deleteFlag,
        column,
        prodRoleId: item.prodRoleId,
      };
    }
    return '';
  })

  renderPanels = (cloumnData, roleButton) => {
    if (cloumnData.length > 0) {
      return (
        <PageCell footer={this.renderFootBtns(roleButton)}>
          {
            cloumnData.map((panel, index) => (
              <Column title={panel.title} key={index}>
                {
                  panel.deleteFlag === 'T' && (
                    <Button
                      type="danger"
                      size="small"
                      className={style.btnDel}
                      onClick={() => { this.onDelPanels(panel.prodInstId, panel.prodRoleId, index); }
                      }
                    >
                      <Icon type="minus" />
                    </Button>
                  )
                }
                {EachForm(panel.column)}
              </Column>
            ))
          }
        </PageCell>
      );
    }
    return '';
  }

  render() {
    const {
      prodName, prodRole, roleButton,
      visibleQuickNum,
      visibleTerminal,
      visibleOptionPackage,
      visibleFunction,
    } = this.state;
    const cloumnData = this.columnModule(prodRole);
    return (
      <Fragment>
        <PagePanel title={prodName} size="large">
          {this.renderPanels(cloumnData, roleButton)}
        </PagePanel>
        <DrawerNumber
          visible={visibleQuickNum}
          onClose={() => { this.setState({ visibleQuickNum: false }); }}
        />
        <DrawerTerminal
          visible={visibleTerminal}
          onClose={this.onToggleTerminal}
        />
        <DrawerOptionPackage
          visible={visibleOptionPackage}
          onClose={() => { this.setState({ visibleOptionPackage: false }); }}
        />
        <DrawerFunction
          visible={visibleFunction}
          onClose={() => { this.setState({ visibleFunction: false }); }}
        />
      </Fragment>
    );
  }
}
