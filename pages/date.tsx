import * as React from 'react';
import Router from 'next/router';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import Table from 'antd/lib/table';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import MenuItem from '@material-ui/core/MenuItem';
import Select from  '@material-ui/core/Select';
import { routeRadiosData } from '../components/subscribeData';
import '../styles/back.css';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import Highlighter from 'react-highlight-words';


export default class BackPage extends React.Component<any, any> {
  searchInput: any;
  constructor(props: any) {
    super(props);
    this.state = {
      tableList: [],
      selectDateOptions: [],
      histogramData: {},
      pieData: {},
      selectDate: '',
      searchText: '',
      pageSet: {
        total: 0,
        pageSize: 20,
        current: 0,
        showTotal: (total: any) => <span>共{total}条</span>
      }
    }
  }
  componentDidMount() {
    let status = window.sessionStorage.getItem('status');
    if (status !== 'logined') {
      Router.push({pathname: '/'});
      window.location.href ='/';
    }
    // fetch('http://xuncs.cn:2827/back/times')
    // .then(res => res.json())
    // .then((res: any) => {
    //   let options: string = [];
    //   res.data.map((itm: any) => {
    //     options.push(itm.date);
    //   })
    //   this.setState({selectDateOptions: options, selectDate: options[0]});
    //   this.getOption(options[0]);
    //   this.getTableData(1);
    // })
    let options = ['2019-01-18', '2019-01-19', '2019-01-20'];
    this.setState({selectDateOptions: options, selectDate: options[0]}, () => {
      this.getOption(options[0]);
      this.getTableData(1);
    });
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
      let data = [
        {name: '飞机场', value: res.data.plane.reduce((prev: number, curr: number) => prev + curr)},
        {name: '火车站', value: res.data.train.reduce((prev: number, curr: number) => prev + curr)},
        {name: '高铁站', value: res.data.gaotie.reduce((prev: number, curr: number) => prev + curr)}
      ];
      this.setState({
        histogramData: {
          backgroundColor: '#fff',
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
  getTableData = (page: any, mobile?: any) => {
    fetch(`http://xuncs.cn:2827/back/table?date=${this.state.selectDate}&page=${page}&size=20&mobile=${mobile}`)
    .then(res => res.json())
    .then((res: any) => {
      this.setState({
        tableList: res.data.data || [],
        pageSet: {...res.data.pageSet, showTotal: (total: any) => <span>共{total}条</span> }
      })
    })
  }
  handleChange = (event: any) => {
    this.setState({
      selectDate: event.target.value
    });
    this.getOption(event.target.value);
    this.getTableData(1);
  };
  getColumnSearchProps = (dataIndex: any) => ({
    filterDropdown: ({
      setSelectedKeys, selectedKeys, confirm, clearFilters,
    }: any) => (
      <div className="custom-filter-dropdown">
        <Input
          ref={node => { this.searchInput = node; }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          查询
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          清空
        </Button>
      </div>
    ),
    filterIcon: (filtered: any) => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value: any, record: any) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible: any) => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: (text: any) => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  })
  handleSearch = (selectedKeys: any, confirm: any) => {
    console.log(selectedKeys);
    confirm();
    this.getTableData(1, selectedKeys[0]);
    this.setState({ searchText: selectedKeys[0] });
  }
  handleReset = (clearFilters: any) => {
    clearFilters();
    this.setState({ searchText: '' });
    this.getTableData(1);
  }
  render() {
    const TableColumns = [
      {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        fixed: 'left',
      }, {
        title: '姓名',
        dataIndex: 'userName',
        key: 'userName',
      }, {
        title: '手机号',
        dataIndex: 'mobile',
        key: 'mobile',
        ...this.getColumnSearchProps('mobile'),
      }, {
        title: '学号',
        dataIndex: 'stuId',
        key: 'stuId',
      }, {
        title: '终点站',
        dataIndex: 'route',
        key: 'route',
        render: (text: string) => <span>{routeRadiosData.filter(itm => itm.value === text)[0].key}</span>,
      }, {
        title: '时间',
        dataIndex: 'startDate',
        key: 'startDate',
        render: (text: string, itm: any) => <span>{text} {itm.startTime}</span>,
      }
    ];
    return (
      <>
        <p style={{textAlign: "center", fontSize: 24, paddingTop: 64}}>西电寒假送站校车预约助手</p>
        <Row>
          <Col xs={24} sm={24}>
            <div style={{paddingBottom: 24}}>
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
          </Col>
          <Col xs={24} sm={12}>
            <ReactEcharts
              style={{ background: '#fff', paddingTop: 12}}
              option={this.state.histogramData}
              notMerge={true}
              lazyUpdate={true}
            />
          </Col>
          <Col xs={24} sm={12}>
            <ReactEcharts
              style={{ background: '#fff', paddingTop: 12}}
              option={this.state.pieData}
              notMerge={true}
              lazyUpdate={true}
            />
          </Col>
          <Col span={24}>
            <Table
              style={{width: '100%'}}
              scroll={{ x: 700 }}
              dataSource={this.state.tableList}
              columns={TableColumns}
              pagination={this.state.pageSet}
              onChange={(pageSet) => this.getTableData(pageSet.current)}
            />
          </Col>
        </Row>
      </>
    )
  }
}
