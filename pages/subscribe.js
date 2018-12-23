import React from 'react';
import RadioGroup from '../components/Radio/index';
import { createForm, formShape } from 'rc-form';
import '../styles/subscribe.css';

class SubscribePage extends React.Component {
  static propTypes = {
    form: formShape
  };
  constructor(props) {
    super(props);
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((error, value) => {
      console.log(this.props.form.getFieldError('username'))
      console.log(error, value);
    });
  }
  getError = (key) => {
    const errs = this.props.form.getFieldError(key);
    let res = null;
    if (errs) {
      res = errs.join(',');
    }
    return res;
  }
  render() {
    const { getFieldDecorator, getFieldError } = this.props.form;
    const userNameOptions = {
      rules: [{
        required: true,
        message: '请输入姓名',
      },]
    };
    const mobileOptions =  {
      rules: [{
        required: true,
        message: '请输入正确手机号'
      }]
    };
    const stuIdOptions = {
      rules: [{
        required: true,
        message: '请输入正确的学号'
      }]
    };
    const addressOptions = {
      rules: [{
        required: true,
        type: 'string',
        message: '请输入宿舍地址'
      }]
    };
    const routeOptions = {
      rules: [{
        required: true,
        message: '请选择路线'
      }]
    };
    const routeRadiosData = [
      {key: '飞机场', value: 'plane'},
      {key: '火车站', value: 'train'},
      {key: '高铁站', value: 'high-speed'}
    ];
    const startDateOptions = {
      rules: [{
        required: true,
        message: '请选择出发日期'
      }]
    };
    const dateRadiosData = [
      {key: '1月19日', value: '1月19日'},
      {key: '1月20日', value: '1月10日'},
      {key: '1月21日', value: '1月21日'}
    ];
    const startTimeOptions = {
      rules: [{
        required: true,
        message: '请选择出发时间'
      }]
    };
    const timeRadiosData = [
      {key: '9:00', value: '9:00'},
      {key: '12:00', value: '12:00'},
      {key: '15:00', value: '15:00'}
    ];
    return (
      <div className="subscribe">
        <form className="sub-form">
          <h3 className="sub-tit">
            请选择你的路线
            <img src="/static/santaClaus.svg" />
          </h3>
          <div className="sub-form-item">
            <p className="sub-form-item-radio">路线</p>
            {getFieldDecorator('route', routeOptions)(
              <RadioGroup  name="route" radiosData={routeRadiosData} />
            )}
            <p>{this.getError('route')}</p>
          </div>

          <div className="sub-form-item">
            <p className="sub-form-item-radio">日期</p>
            {getFieldDecorator('startDate', startDateOptions)(
               <RadioGroup  name="route" radiosData={dateRadiosData} />
            )}
            <p>{this.getError('startDate')}</p>
          </div>

          <div className="sub-form-item">
            <p className="sub-form-item-radio">时间</p>
            {getFieldDecorator('startTime', startTimeOptions)(
              <RadioGroup  name="route" radiosData={timeRadiosData} />
            )}
            <p>{this.getError('startTime')}</p>
          </div>

          <h3 className="sub-tit" style={{marginTop: 32}}>
            请填写你的信息
            <img src="/static/santaClaus.svg" />
          </h3>

          <div className="sub-form-item">
            <p>姓名</p>
            {getFieldDecorator('username', userNameOptions)(
              <input className="sub-input" />
            )}
            <p>{this.getError('username')}</p>
          </div>

          <div className="sub-form-item">
            <p>手机号</p>
            {getFieldDecorator('mobile', mobileOptions)(
              <input className="sub-input" type="number" />
            )}
            <p>{this.getError('mobile')}</p>
          </div>

          <div className="sub-form-item">
            <p>学号</p>
            {getFieldDecorator('stuId', stuIdOptions)(
              <input className="sub-input" type="number" />
            )}
            <p>{this.getError('stuId')}</p>
          </div>

          <div className="sub-form-item">
            <p>宿舍地址</p>
            {getFieldDecorator('address', addressOptions)(
              <input className="sub-input" />
            )}
            <p>{this.getError('address')}</p>
          </div>

          <button className="sub-form-btn" onClick={this.onSubmit}>提交</button>
        </form>
      </div>
    )
  }
}

export default createForm()(SubscribePage);