import * as React from 'react';
import '../styles/tickerCard.css';
import '../styles/font.css';
import { TicketProps } from '../back/Models/ticket';
import { routeRadiosData } from './subscribeData';

export default class Ticket extends React.Component<{data: TicketProps}, any> {
  render() {
    const data = this.props.data;
    const route = routeRadiosData.filter(itm => itm.value === data.route)[0].key;
    return (
      <div className="ticket-card">
        <i className="iconfont icon-success1-copy ticket-card-icon"></i>

        <div className="ticket-card-tks">
          <p>{data.price}.00元</p>
          <span>你已订票成功，请等候送票。</span>
        </div>
        <div className="ticket-card-divider">
          <div>
            <div className="ticket-card-divider-pot"></div>
            <div className="ticket-card-divider-pot"></div>
          </div>
        </div>

        <div className="ticket-card-content">
          <div className="ticket-card-times">
            <div>
              <p>日期</p>
              <p>2019年{data.startDate}</p>
            </div>
            <div>
              <p>时间</p>
              <p>{data.startTime}</p>
            </div>
          </div>

          <div className="ticket-card-pos">
            <div>
              <p>路线</p>
              <p>西安电子科技大学 - {route}</p>
            </div>
            <i className="iconfont icon-train"></i>
          </div>

          <div className="ticket-card-info">
            <i className="iconfont icon-tips"></i>
            <div>
              <p>姓名：{data.userName}</p>
              <p>学号：{data.stuId}</p>
              <p>手机：{data.mobile}</p>
              <p>地址：{data.address}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}