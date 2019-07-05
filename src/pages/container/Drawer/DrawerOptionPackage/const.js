const FilterData = [
  {
    data: ['必选', '自主', '促销'],
  },
];

const names = [
  '乐享4G（2017版）-229元套餐',
  '融合老用户尊享礼包-预存300元赠送1800M流量',
  '201609-4G套餐外省内流量每月赠送500M',
  '乐享4G（2017版）-199元套餐',
  '乐享无限套餐预存500元送360元翼支付红包',
  '201609-4G套餐外省内流量每月赠送500M',
];

const PageData = [];

for (let i = 0; i < 36; i += 1) {
  PageData.push({
    key: `db-${i}`,
    tag: Math.round(Math.random() * 1),
    label: names[Math.round(Math.random() * (names.length - 1))],
  });
}

export {
  FilterData,
  PageData,
};
