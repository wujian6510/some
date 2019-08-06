import React, { Component, Fragment } from 'react';
import {
  Popover, Button, Row, Col,
} from 'antd';
import { PageHead } from '$pages/components/PageLayouts';
import ClientOrientation from '$pages/components/ClientOrientation';
import classnames from 'classnames';

import ReceptionUser from './ReceptionUser'; // 客户信息
import ReceptionList from './ReceptionList'; // 客户套餐列表
import ReceptionRecommend from './ReceptionRecommend'; // 营销推荐
import ReceptionPackage from './ReceptionPackage'; // 套餐订购
import { DrawerRecommend } from '$pages/container/Drawer';

import style from './Reception.module.scss';
import { RecommendData, PackageDate } from './const';

class Reception extends Component {
  state = {
    recommend: false,
  }

  onToggleRecommend = () => {
    this.setState(prev => ({
      recommend: !prev.recommend,
    }));
  }

  renderQuickMenu = () => (
    <Row gutter={15}>
      <Col span={6}>
        <Button block className={style.btnRed}>批量模板单</Button>
      </Col>
      <Col span={6}>
        <Button block className={style.btnOrg}>千兆预受理</Button>
      </Col>
      <Col span={6}>
        <Button block className={style.btnBlue}>手机保障</Button>
      </Col>
      <Col span={6}>
        <Button block className={style.btnGreen}>预装返档</Button>
      </Col>
      <Col span={6}>
        <Button block className={style.btnBlue}>宽带预受理</Button>
      </Col>
      <Col span={6}>
        <Button block className={style.btnCoffee}>提速受理</Button>
      </Col>
    </Row>
  )

  render() {
    const { history } = this.props;
    const { recommend } = this.state;
    return (
      <Fragment>
        <PageHead layout="fixed" className={style.head}>
          <div className={style.headWrap}>
            <div className={style.headMain}>
              <div className={style.headLogo}>
                <img src="./assets/images/logo.png" alt="智慧运营" />
              </div>
              <ClientOrientation history={this.props.history} />
            </div>
            <Popover
              placement="bottomRight"
              overlayClassName={style.quickMenu}
              content={this.renderQuickMenu()}
            >
              <Button className={style.quick}>
                <img src="./assets/images/img-quick.png" alt="" className={style.icon} />
                <div className={style.span}>快捷办理</div>
              </Button>
            </Popover>
          </div>
        </PageHead>
        <div className={style.wrap}>
          <div className={style.splitter}>
            <div className={style.full}>
              <ReceptionUser />
            </div>
            <div className={style.extra}>
              <ReceptionRecommend
                data={RecommendData}
                history={this.props.history}
                onMoreRecommend={this.onToggleRecommend}
              />
            </div>
          </div>
          <div className={classnames(style.splitter, 'full')}>
            <div className={classnames(style.full, 'flex')}>
              <ReceptionList />
            </div>
            <div className={classnames(style.extra, 'flex')}>
              <ReceptionPackage data={PackageDate} history={history} />
            </div>
          </div>
          <DrawerRecommend visible={recommend} onClose={this.onToggleRecommend} />
        </div>
      </Fragment>
    );
  }
}

export default Reception;
