import React from 'react'
import C3Chart from 'react-c3js'
import { Form, DatePicker, TimePicker, Table, Card } from 'antd'

const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;

//Subscriber's and Unsubscriber's Data
let stackedBar = {
  data: {
    columns: [
      ['Subscribers', 65, 59, 80, 81, 56, 55, 40],
      ['Unsubscribers', -65, -59, -80, -81, -56, -35, -50],
    ],
    type: 'bar',
    groups: [['Subscribers', 'Unsubscribers']],
  },
  color: {
    pattern: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)',],
  },
  bar: {
    width: {
      max: 45,
    },
  },
  grid: {
    y: {
      show: !0,
      lines: [
        {
          value: 0,
        },
      ],
    },
  },
}

@Form.create()
class SubUnsub extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      // Should format date value before submit.
      const rangeValue = fieldsValue['range-picker'];
      const rangeTimeValue = fieldsValue['range-time-picker'];
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
      };
      console.log('Received values of form: ', values);
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };
    return (
      <div>  
        <div>
          <Form>
            <FormItem>
              {getFieldDecorator('range-picker', rangeConfig)(
              <RangePicker style={{float: 'right'}}/>
              )}
            </FormItem>
          </Form>
        </div>
        <div className="row">
          <div className="col-lg-2"/>
          <div className="col-lg-8">
            <C3Chart
              data={stackedBar.data}
              color={stackedBar.color}
              bar={stackedBar.bar}
              grid={stackedBar.grid}
            />
          </div>
          <div className="col-lg-2"/>
        </div>   
      
      </div>
    )
  }
}

export default SubUnsub
