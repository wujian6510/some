const FilterData = [
  {
    title: '按品牌',
    data: ['全部', '华为', '中兴', '小米', 'Apple', '三星'],
  },
];

const names = [
  '三星 Galaxy S8+（SM-G9550）4GB+64G',
  'OPPO R9sk 全网通4G+64G 双卡双待手机',
  'Apple iPhone 6 32GB 金色 移动联通电信4G手机',
  '魅族 PRO6S 4GB+64GB 全网通公开版',
  'vivo Xplay6 全网通 6GB+64GB 磨砂黑',
  '中兴 AXON天机 MAX 华尔金 移动定制版',
  '上海中兴 ZTE tech 守护宝L610 电信老人',
];

const PageData = [];

for (let i = 0; i < 36; i += 1) {
  PageData.push({
    key: `db-${i}`,
    label: names[Math.round(Math.random() * (names.length - 1))],
    tag: '代维',
    code: '8802 7040 1036 8906 1601',
    type: '省集中',
    price: '2000',
    diffPrice: '120',
  });
}

export {
  FilterData,
  PageData,
};
