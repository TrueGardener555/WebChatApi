import React from 'react'
import { Table } from 'antd'
import './style.scss'

const name_filter = [
  {
    text: 'Joe',
    value: 'Joe',
  },
  {
    text: 'John',
    value: 'John',
  },
]
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 300,
    filters: name_filter,
    render: (text, record) => <a href="javascript:void(0)">{text}</a>,
    onFilter: (value, record) => record.name.indexOf(value) === 0,
  },
  {
    title: 'Widget',
    children: [
      {
        title: 'Impressions',
        dataIndex: 'impressions',
        key: 'impressions',
        width: 50,
      },
      {
        title: 'Opt-Ins',
        dataIndex: 'optins',
        key: 'optins',
        width: 50,
      },
      {
        title: 'Conversion',
        dataIndex: 'conversion',
        key: 'conversion',
        width: 50,
      },
    ],
  },
  {
    title: 'Opt-in Message',
    children: [
      {
        title: 'Opened',
        dataIndex: 'opened',
        key: 'opened',
        width: 50,
      },
      {
        title: 'Clicked',
        dataIndex: 'clicked',
        key: 'clicked',
        width: 50,
      },
    ],
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    width: 30,
  },
]
const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: 'Messages - sorteo - agosto - ads - comment -2',
    impressions: 555,
    optins: 376,
    conversion: 67.7,
    opened: '100.0%',
    clicked: '69.0%',
    gender: 'F',
  })
}
class GrowthTools extends React.Component {
  render() {
    return (
      <section className="card">
        <div className="card-header">
          <div className="utils__title">
            <strong>GrowthTools Page</strong>
          </div>
        </div>
        <div className="card-body">
          <Table columns={columns} dataSource={data} bordered size="large" />
        </div>
      </section>
    )
  }
}

export default GrowthTools
