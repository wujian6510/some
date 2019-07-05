const attr = [
  '集团客户群组',
  '车管专家',
  '语音阀值提醒',
  '计费虚拟网',
  '189邮箱',
  '彩铃',
  '长话长聊',
];

const renderData = (total) => {
  const data = [];
  for (let i = 0; i < total; i += 1) {
    data.push({
      key: `db-${i}`,
      tag: Math.round(Math.random() * 1),
      label: attr[Math.round(Math.random() * (attr.length - 1))],
    });
  }
  return data;
};

const PageData = {
  optional: renderData(20),
  selected: [],
};

export default PageData;
