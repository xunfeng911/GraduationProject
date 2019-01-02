import * as React from 'react';
import '../styles/tickets.css';
import '../styles/font.css';
import Ticket from '../components/Ticket';
import Toast from '../components/Toast';

export default class extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: null,
      data: []
    }
  }
  componentDidMount() {
    const data = window.localStorage.getItem('tickets');
    if (data) {
      this.setState({
        data: JSON.parse(data)
      })
    }
  }
  onChange = (e: any) => this.setState({value: e.target.value.length <= 11 ? e.target.value :  this.state.value});
  onSearch = () => {
    const pattern = /0?[0-9]{11}/;
    if (pattern.test(this.state.value)) {
      fetch(`http://xuncs.cn:2827/ticket/list/${this.state.value}`, {method: 'GET'})
      .then(res => res.json())
      .then(res => {
        if (res.data.data) {
          window.localStorage.setItem('tickets', JSON.stringify(res.data.data));
          this.setState({data: res.data.data});
        }
      })
    } else {
      Toast.fail('请输入11位学号', 1);
    }
  }
  render() {
    return (
      <div className="tickets">
        <div className="input-search" style={{marginBottom: 48}}>
          <input
            className="input"
            type="number"
            maxLength={11}
            placeholder="请输入学号"
            onChange={this.onChange}
            value={this.state.value} />
          <span className="input-suffix">
            <button className="button" onClick={this.onSearch}>
              <span>Search</span>
            </button>
          </span>
        </div>
        {!this.state.data.length && <p className="tickets-none">暂无历史纪录</p>}
        {this.state.data.map((res: any, i: any) => (
          <Ticket key={i} data={res} />
        ))}
       <p className="tickets-index">
        <a href="index">去订票</a>
       </p>
      </div>
    )
  }
}
