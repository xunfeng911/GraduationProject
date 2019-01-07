import * as React from 'react';
import Router from 'next/router';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import message from 'antd/lib/message';
import '../styles/back.css';
class loginPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
  }

  handleChange = (name: any) => (event: any) => {
    this.setState({
      [name]: event.target.value,
    });
  };
  onSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        fetch("http://xuncs.cn:2827/back/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({...values})
        }).then((res: any) => {
          if (!res.data) {
            message.success('登录成功！');
            window.sessionStorage.setItem('status', 'logined');
            Router.push({pathname: '/home'});
          } else {
            message.error('账号密码错误!');
          }
        })
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout ={
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
    };
    return (
      <section className="back-sec">
        <section className="back-cont">
          <h3 className="back-h">后台登录</h3>
          <Form layout="horizontal">
            <Form.Item label="账号"  {...formItemLayout}>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item label="密码"  {...formItemLayout}>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input type="password" />
              )}
            </Form.Item>
          </Form>
          <Button type="primary" className="back-btn" onClick={this.onSubmit} block>登录</Button>
        </section>
      </section>
    );
  }
}
export default Form.create()(loginPage);