import React from 'react'
import ChartistGraph from 'react-chartist'
import Chartist from 'chartist'
import { Form, DatePicker, TimePicker, Table, Card } from 'antd'

const FormItem = Form.Item
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
class Active extends React.Component {
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
            <ChartistGraph
              data={activeData}
              options={activeOptions}
              type="Line"
              style={{ height: '400px' }}
            />
          </div>
          <div className="col-lg-2" />
        </div>
      </div>
    )
  }
}

export default Active
