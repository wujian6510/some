import BaseLayout from '$pages/layouts/BaseLayout';
import BlankLayout from '$pages/layouts/BlankLayout';

import Home from '$pages/container/Home'; // 客户定位
import Reception from '$pages/container/Reception'; // 客户接待
import Handle from '$pages/container/Handle'; // 业务办理
import Package from '$pages/container/Package'; // 选择套餐
import Statements from '$pages/container/Statements'; // 结算
import Checkstand from '$pages/container/Checkstand'; // 收银台
import Transfer from '$pages/container/Handle/Transfer'; // 过户
import ChangeService from '$pages/container/Handle/ChangeService'; // 变更业务
import AccountInfo from '$pages/container/AccountInfo'; // 账户信息
import UserInfoEdit from '$pages/container/UserInfoEdit'; // 修改资料
import CreatClient from '$pages/container/CreatClient'; // 新建客户

const router = [
  {
    path: '/',
    layout: BaseLayout,
    component: Home,
  },
  {
    path: '/reception',
    layout: BaseLayout,
    keepAlive: true,
    component: Reception,
  },
  {
    path: '/handle',
    layout: BaseLayout,
    keepAlive: true,
    component: Handle,
  },
  {
    path: '/package',
    layout: BaseLayout,
    keepAlive: true,
    component: Package,
  },
  {
    path: '/checkstand',
    layout: BaseLayout,
    component: Checkstand,
  },
  {
    path: '/statements',
    layout: BaseLayout,
    component: Statements,
  },
  {
    path: '/transfer',
    layout: BaseLayout,
    component: Transfer,
  },
  {
    path: '/changeService',
    layout: BaseLayout,
    component: ChangeService,
  },
  {
    path: '/accountInfo',
    layout: BaseLayout,
    component: AccountInfo,
  },
  {
    path: '/userInfoEdit',
    layout: BaseLayout,
    component: UserInfoEdit,
  },
  {
    path: '/creatClient',
    layout: BaseLayout,
    component: CreatClient,
  },
];

export default router;
