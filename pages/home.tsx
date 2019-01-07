import * as React from 'react';
import Router from 'next/router';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from  '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { routeRadiosData } from '../components/subscribeData';


export default class BackPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      tableList: [],
      selectDateOptions: [],
      histogramData: {},
      pieData: {},
      selectDate: ''
    }
  }
  componentDidMount() {
    let status = window.sessionStorage.getItem('status');
    if (status !== 'logined') {
      Router.push({pathname: '/'});
      window.location.href ='/';
    }
    fetch('http://xuncs.cn:2827/back/times')
    .then(res => res.json())
    .then((res: any) => {
      let options: string = [];
      res.data.map((itm: any) => {
        options.push(itm.date);
      })
      this.setState({selectDateOptions: options, selectDate: options[0]});
      this.getOption(options[0]);
    })
  }
  getOption (date: string) {
    fetch(`http://xuncs.cn:2827/back/data/${date}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      let data = [
        {name: '飞机场', value: res.data.plane.reduce((prev: number, curr: number) => prev + curr)},
        {name: '火车站', value: res.data.train.reduce((prev: number, curr: number) => prev + curr)},
        {name: '高铁站', value: res.data.gaotie.reduce((prev: number, curr: number) => prev + curr)}
      ];
      this.setState({
        tableList: res.data.table,
        histogramData: {
          backgroundColor: '#fff',
          title: {
            text: `单日时间段分析柱状图`
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'shadow'
              }
          },
          legend: {
              data: ['飞机场', '火车站', '高铁站'],
              align: 'right',
              right: 10,
              itemWidth: 10,
              itemHeight: 10,
              itemGap: 35
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis: [{
              type: 'category',
              data: res.data.times,
              axisLine: {
                  show: true,
              },
              axisTick: {
                  show: false,
              },
              axisLabel: {
                  show: true
              },
          }],
          yAxis: [{
              type: 'value',
              axisLabel: {
                  formatter: '{value}'
              },
              axisTick: {
                  show: false,
              },
              axisLine: {
                  show: false,
              },
          }],
          series: [{
              name: '飞机场',
              type: 'bar',
              data: res.data.plane,
              barWidth: 15,
              barGap: 1,
          }, {
              name: '火车站',
              type: 'bar',
              data: res.data.train,
              barWidth: 15,
              barGap: 1,
          }, {
              name: '高铁站',
              type: 'bar',
              data: res.data.gaotie,
              barWidth: 15,
              barGap: 1,
          }]
        },
        pieData: {
          title: {
            text: `单日类型分析饼状图`
          },
          tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          series: [{
              name: '占比情况',
              type: 'pie',
              radius: '68%',
              center: ['50%', '50%'],
              clockwise: false,
              data: data,
              label: {
                  normal: {
                      textStyle: {
                          color: '#999',
                          fontSize: 14,
                      }
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              itemStyle: {
                  normal: {
                      borderWidth: 4,
                      borderColor: '#ffffff',
                  },
                  emphasis: {
                      borderWidth: 0,
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }],
          color: [
              '#00acee',
              '#52cdd5',
              '#79d9f1',
              '#a7e7ff',
              '#c8efff'
          ],
          backgroundColor: '#fff'
      }
      })
    });
  }

  handleChange = (event: any) => {
    this.setState({
      selectDate: event.target.value
    });
    this.getOption(event.target.value);
  };
  render() {
    return (
      <>
        <p style={{textAlign: "center", fontSize: 24, paddingTop: 64}}>西电寒假送站校车预约助手</p>
        <div style={{textAlign: "center", fontSize: 24, padding: 24}}>
          选择日期：
          <Select
            value={this.state.selectDate}
            onChange={this.handleChange}
          >
            {this.state.selectDateOptions.map((itm: any) => (
              <MenuItem value={itm}>{itm}</MenuItem>
            ))}
          </Select>
        </div>
        <Grid container spacing={24} style={{padding: '0 64px'}}>
          <Grid item xs={6}>
            <ReactEcharts
              style={{ background: '#fff', paddingTop: 12}}
              option={this.state.histogramData}
              notMerge={true}
              lazyUpdate={true}
            />
          </Grid>
          <Grid item xs={6}>
          <ReactEcharts
              style={{ background: '#fff', paddingTop: 12}}
              option={this.state.pieData}
              notMerge={true}
              lazyUpdate={true}
            />
          </Grid>
        </Grid>
        <Paper style={{padding: 64}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>序号</TableCell>
                <TableCell align="right">姓名</TableCell>
                <TableCell align="right">学号</TableCell>
                <TableCell align="right">手机号</TableCell>
                <TableCell align="right">终点站</TableCell>
                <TableCell align="right">时间</TableCell>
                <TableCell align="right">住址</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.tableList.map(row => {
                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.userName}</TableCell>
                    <TableCell align="right">{row.stuId}</TableCell>
                    <TableCell align="right">{row.mobile}</TableCell>
                    <TableCell align="right">{routeRadiosData.filter(itm => itm.value === row.route)[0].key}</TableCell>
                    <TableCell align="right">{row.startDate} {row.startTime}</TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </>
    )
  }
}
