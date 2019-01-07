import * as React from 'react';
import Router from 'next/router';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import message from 'antd/lib/message';
import '../styles/back.css';
export default class  extends React.Component<any, any> {
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
  onSubmit = () => {
    if (this.state.name === '' || this.state.password === '') {
      message.error('请输入账号和密码');
    }
    fetch("http://xuncs.cn:2827/back/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({...this.state})
        }).then(res => {
          window.sessionStorage.setItem('status', 'logined');
          setTimeout(() => {
            Router.push({pathname: '/home'});
          }, 2000);
        })
  }
  render() {
    return (
      <section className="back-sec">
        <section className="back-cont">
          <h3>后台登录</h3>
          <form className="back-form" noValidate autoComplete="off">
            <TextField
              required
              id="standard-name"
              label="账号"
              rows={10}
              className="back-form-name"
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
              fullWidth
            />
            <TextField
              required
              id="standard-password"
              label="密码"
              className="back-form-pwd"
              value={this.state.password}
              onChange={this.handleChange('password')}
              margin="normal"
              type="password"
              fullWidth
            />
          </form>
          <Button variant="outlined" color="primary" className="back-btn" onClick={this.onSubmit}>登录</Button>
        </section>
      </section>
    );
  }
}