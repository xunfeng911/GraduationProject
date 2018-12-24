import React from 'react';
import RadioGroup from '../components/Radio/index';
import Router from 'next/router'
import { createForm, formShape } from 'rc-form';
import '../styles/subscribe.css';
import { routeOptions, routeRadiosData, startDateOptions, dateRadiosData, startTimeOptions, timeRadiosData, userNameOptions, mobileOptions, stuIdOptions, addressOptions } from '../components/subscribeData';

class SubscribePage extends React.Component<any, any> {
  static propTypes = {
    form: formShape
  };
  constructor(props: any) {
    super(props);
  }
  onSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((error: any, value: any) => {
      console.log(error, value);
      if(!error) {
        const price = routeRadiosData.filter(itm => itm.value === value.route)[0].price;
        const fetchData = {
          ...value,
          price,
          mobile: +value.mobile,
          stuId: +value.stuId
        };
        fetch("http://localhost:2828/ticket/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(fetchData)
        }).then(res => {
          window.localStorage.setItem('tickets', JSON.stringify([fetchData]));
          Router.push({pathname: '/tickets'});
        })
      }
    });
  }
  getError = (key: any) => {
    const errs = this.props.form.getFieldError(key);
    let res = null;
    if (errs) {
      res = errs.join(',');
    }
    return res;
  }
  render() {
    const { getFieldDecorator } = this.props.form;
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
            {getFieldDecorator('userName', userNameOptions)(
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