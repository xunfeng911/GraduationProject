import React from 'react';
import '../styles/tickets.css';
import '../styles/font.css';
import Ticket from '../components/Ticket';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      datas: [{}]
    }
  }
  componentDidMount() {
    console.log(1);
  }
  onChange = (e) => this.setState({value: e.target.value});

  render() {
    return (
      <div className="tickets">
        <div className="input-search" style={{marginBottom: 48}}>
          <input
            className="input"
            type="number"
            placeholder="请输入学号或手机号"
            onChange={this.onChange}
            value={this.state.value} />
          <span className="input-suffix">
            <button className="button">
              <span>Search</span>
            </button>
          </span>
        </div>
        {this.state.datas.map((res, i) => (
          <Ticket key={i} />
        ))}
       <p className="tickets-index">
        <a href="index">去订票</a>
       </p>
      </div>
    )
  }
}
