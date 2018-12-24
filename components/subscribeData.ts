export const userNameOptions = {
  rules: [{
    required: true,
    message: '请输入姓名',
  },]
};
export const mobileOptions =  {
  rules: [{
    required: true,
    message: '请输入正确手机号'
  }]
};
export const stuIdOptions = {
  rules: [{
    required: true,
    message: '请输入正确的学号'
  }]
};
export const addressOptions = {
  rules: [{
    required: true,
    type: 'string',
    message: '请输入宿舍地址'
  }]
};
export const routeOptions = {
  rules: [{
    required: true,
    message: '请选择路线'
  }]
};
export const routeRadiosData = [
  {key: '飞机场', value: 'plane', price: 35},
  {key: '火车站', value: 'train', price: 25},
  {key: '高铁站', value: 'high-speed', price: 30}
];
export const startDateOptions = {
  rules: [{
    required: true,
    message: '请选择出发日期'
  }]
};
export const dateRadiosData = [
  {key: '1月19日', value: '1月19日'},
  {key: '1月20日', value: '1月10日'},
  {key: '1月21日', value: '1月21日'}
];
export const startTimeOptions = {
  rules: [{
    required: true,
    message: '请选择出发时间'
  }]
};
export const timeRadiosData = [
  {key: '9:00', value: '9:00'},
  {key: '12:00', value: '12:00'},
  {key: '15:00', value: '15:00'}
];