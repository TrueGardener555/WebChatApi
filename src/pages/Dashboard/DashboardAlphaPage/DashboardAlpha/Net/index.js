import React from 'react'
import ChartistGraph from 'react-chartist'
import Chartist from 'chartist'
import { Line, Bar, Radar, Polar, Pie, Doughnut } from 'react-chartjs-2'
import { Form, DatePicker, TimePicker, Table, Card } from 'antd'

const FormItem = Form.Item
const RangePicker = DatePicker.RangePicker

//Net Subscriber's Data
const netData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Net Subscribers',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
}
const netOptions = {
  scales: {
    xAxes: [
      {
        stacked: true,
      },
    ],
    yAxes: [
      {
        stacked: true,
      },
    ],
  },
}

@Form.create()
class Net extends React.Component {
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
        <div>
          <Form>
            <FormItem>
              {getFieldDecorator('range-picker', rangeConfig)(
                <RangePicker style={{ float: 'right' }} />,
              )}
            </FormItem>
          </Form>
        </div>
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <Bar data={netData} options={netOptions} width={400} height={200} />
          </div>
          <div className="col-lg-2" />
        </div>
      </div>
    )
  }
}

export default Net
