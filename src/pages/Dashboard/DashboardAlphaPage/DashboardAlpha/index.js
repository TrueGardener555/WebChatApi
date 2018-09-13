import React from 'react'
import PaymentTx from 'components/CleanComponents/PaymentTx'
import ChartCard from 'components/CleanComponents/ChartCard'
import ChartistGraph from 'react-chartist'
import Chartist from 'chartist'

import { Form, Button, Input, Icon, Tabs, Select, DatePicker, TimePicker, Table, Card } from 'antd'
import data from './data.json'
import 'c3/c3.css'

import Active from './Active'
import Net from './Net'
import SubUnsub from './SubUnsub'

const FormItem = Form.Item
const TabPane = Tabs.TabPane
const Option = Select.Option
const MonthPicker = DatePicker.MonthPicker
const RangePicker = DatePicker.RangePicker

//Active Subscriber's Data
let activeData = {
  labels: [1, 2, 3, 4, 5, 6, 7],
  series: [[5514, 6685, 6985, 7584, 8985, 9954, 10111]],
}
let activeOptions = {
  low: 0,
  showArea: true,
  showLine: true,
  showPoint: true,
  fullWidth: true,
  axisX: {
    showLabel: true,
    showGrid: false,
  },
}

@Form.create()
class DashboardAlpha extends React.Component {
  handleSubmit = e => {
    e.preventDefault()

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return
      }

      // Should format date value before submit.
      const rangeValue = fieldsValue['range-picker']
      const rangeTimeValue = fieldsValue['range-time-picker']
      const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
        'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
        'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
        'range-time-picker': [
          rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
          rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
        ],
        'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
      }
      console.log('Received values of form: ', values)
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    }
    return (
      <div>
        {/* <div style={{ maxWidth: 865 }}> */}
        <div>
          <div>
            <h2>Bot Status</h2>
          </div>
          <div className="card">
            <div className="card-body">
              <Tabs defaultActiveKey="1">
                <TabPane tab="Active Subscribers" key="1">
                  <Active />
                </TabPane>
                <TabPane tab="Net Subscribers" key="2">
                  <Net />
                </TabPane>
                <TabPane tab="Subscribers & Unsubscribers" key="3">
                  <SubUnsub />
                </TabPane>
              </Tabs>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-xl-4">
              <ChartCard
                title={'Subscribers'}
                amount={'47778'}
                chartProps={{
                  width: 120,
                  height: 107,
                  lines: [
                    {
                      values: [2, 11, 8, 14, 18, 20, 26],
                      colors: {
                        area: 'rgba(199, 228, 255, 0.5)',
                        line: '#004585',
                      },
                    },
                  ],
                }}
              />
            </div>
            <div className="col-xl-4">
              <ChartCard
                title={'Unsubscribers'}
                amount={'1070'}
                chartProps={{
                  width: 120,
                  height: 107,
                  lines: [
                    {
                      values: [20, 80, 67, 120, 132, 66, 97],
                      colors: {
                        area: 'rgba(199, 228, 255, 0.5)',
                        line: '#004585',
                      },
                    },
                  ],
                }}
              />
            </div>
            <div className="col-xl-4">
              <ChartCard
                title={'Net Subscribers'}
                amount={'46708'}
                chartProps={{
                  width: 120,
                  height: 107,
                  lines: [
                    {
                      values: [0, 16708, 23708, 31708, 33708, 44708, 46708],
                      colors: {
                        area: 'rgba(199, 228, 255, 0.5)',
                        line: '#004585',
                      },
                    },
                  ],
                }}
              />
            </div>
          </div>

          <div>
            <h2> Inspirations For Your Bot</h2>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <Card
                style={{ marginTop: 16 }}
                title="ManyChat Free Video Course"
                extra={<a href="#">More</a>}
                actions={[<span>Read</span>]}
              >
                Master the cutting-edge field of Messenger Marketing and learn to use chatbots to
                connect with your audience, delight your customers, and drive new sales for your
                business.
              </Card>
            </div>
            <div className="col-xl-6">
              <Card
                style={{ marginTop: 16 }}
                title="7 Ways to Implement Messenger Marketing into Your Business Today"
                extra={<a href="#">More</a>}
                actions={[<span>Read</span>]}
              >
                Messenger Marketing is a channel that, when used correctly, opens up infinite doors
                of communication and engagement with your audience, in turn driving more leads and
                sales.
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardAlpha
