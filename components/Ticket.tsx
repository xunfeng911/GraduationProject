import * as React from 'react';
import '../styles/tickerCard.css';
import '../styles/font.css';

export default class Ticket extends React.Component {
  render() {
    return (
      <div className="ticket-card">
        <i className="iconfont icon-success1-copy ticket-card-icon"></i>

        <div className="ticket-card-tks">
          <p>25.00元</p>
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
              <p>2019年1月11日</p>
            </div>
            <div>
              <p>时间</p>
              <p>9:00</p>
            </div>
          </div>

          <div className="ticket-card-pos">
            <div>
              <p>路线</p>
              <p>西安电子科技大学 - 火车站</p>
            </div>
            <i className="iconfont icon-train"></i>
          </div>

          <div className="ticket-card-info">
            <i className="iconfont icon-tips"></i>
            <div>
              <p>姓名：陈硕</p>
              <p>学号：15020310063</p>
              <p>手机：17691204183</p>
              <p>地址：丁香12号楼Ⅱ区412中室</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}