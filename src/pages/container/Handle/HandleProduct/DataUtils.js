/**
 * prodRole 数据处理方法
 */

/**
 *  展开或者收起可选包
  * @param {*} prodRole
  * @param {*} prodInstId
  */
const toggleSubOffers = (prodRole, prodInstId) => prodRole.map((pr) => {
  if (pr.prodInstId === prodInstId) {
    pr.openSubOffers = !pr.openSubOffers;
  }
  return pr;
});

/**
 * 添加可选包数据
 * @param {*} prodRole
 * @param {*} prodInstId
 * @param {*} subOfferTypeList
 */
const prodSubOfferTypeListAdd = (prodRole, prodInstId, subOfferTypeList) => prodRole.map((pr) => {
  if (pr.prodInstId === prodInstId) {
    pr.prodSubOffer.prodSubOfferTypeListAdd = subOfferTypeList;
  }
  return pr;
});

/**
 * 修改功能产品
 * @param {} prodRole
 * @param {*} newProdRole
 */
const changeProdRoleFunc = (prodRole, prodInstId, selectedFunc) => prodRole.map((pr) => {
  if (pr.prodInstId === prodInstId) {
    pr.prodFunc.prodFuncList = selectedFunc;
  }
  return pr;
});

/**
 * 添加一个成员
 * @param {} prodRole
 * @param {*} addProdRole
 */
const addProdRole = (prodRole, newProdRole) => {
  prodRole.push(newProdRole);
  return prodRole;
};

/**
 * 删除一个成员
 */
const delProdRole = (prodRole, prodInstId) => prodRole.filter(pr => pr.prodInstId !== prodInstId);

export default {
  toggleSubOffers,
  prodSubOfferTypeListAdd,
  addProdRole,
  delProdRole,
};
