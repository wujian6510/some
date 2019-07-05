const FilterData = [
  {
    data: ['短信', '号码百事通类', '移动业务类', '智能组网业务类', '电话信息语音业务类', '程控新业务'],
  },
];

const names = [
  '集团客户群组',
  '车管专家',
  '语音阀值提醒',
  '数据国内漫游',
  '彩铃',
  '彩信',
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
