import * as React from 'react';
import Router from 'next/router';
import Table from 'antd/lib/table';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import { routeRadiosData } from '../components/subscribeData';
import '../styles/back.css';


export default class BackPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      totalSource: [],
      totalgaotie: 0,
      totalplane: 0,
      totaltrain: 0
    }
  }
  componentDidMount() {
    let status = window.sessionStorage.getItem('status');
    if (status !== 'logined') {
      Router.push({pathname: '/'});
      window.location.href ='/';
    }
    fetch('http://xuncs.cn:2827/back/data')
    .then(res => res.json())
    .then((res: any) => {

      this.setState({
        totalSource: res.data,
        totalplane: res.data.filter((a) => a.type === 'plane').reduce((a, b) => a.total ? (a.total + b.total) : (a + b.total)),
        totalgaotie: res.data.filter((a) => a.type === 'gaotie').reduce((a, b) => a.total ? (a.total + b.total) : (a + b.total)),
        totaltrain: res.data.filter((a) => a.type === 'train').reduce((a, b) => a.total ? (a.total + b.total) : (a + b.total)),
      });
    })
  }

  render() {
    const TotalColumns = [{
      title: '时间',
      dataIndex: 'date_time',
      key: 'date_time',
    }, {
      title: '终点站',
      dataIndex: 'type',
      key: 'type',
      render: (text: string) => <span>{routeRadiosData.filter(itm => itm.value === text)[0].key}</span>,
    }, {
      title: '人数',
      dataIndex: 'total',
      key: 'total',
      render: (text: any) => <span>{text}人</span>
    }];
    return (
      <>
        <p style={{textAlign: "center", fontSize: 24, paddingTop: 64}}>西电寒假送站校车预约助手</p>
        <div style={{padding: '0 24px 24px 0', textAlign: 'right'}}>
          <Button onClick={() => Router.push({pathname: '/date'})} type="primary">单日详情</Button>
        </div>
        <Row>
          <Col xs={24} span={12}>
            <p className="total-p">
              <p>火车：{this.state.totaltrain}人</p>
              <p>高铁：{this.state.totalgaotie}人</p>
              <p>飞机：{this.state.totalplane}人</p>
              <p>共计：{this.state.totaltrain + this.state.totalgaotie + this.state.totalplane}人</p>
            </p>
            <h3 style={{textAlign: 'center'}}>按总日期-时间-终点站的统计表</h3>
            <Table dataSource={this.state.totalSource} columns={TotalColumns}  pagination={false}/>
          </Col>
        </Row>
      </>
    )
  }
}
