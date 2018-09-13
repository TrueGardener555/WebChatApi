import React from 'react'
import { Timeline, Icon, Table } from 'antd'
import './style.scss'
import { tableData } from './data.json'

const tableColumns = [
  {
    title: 'Post',
    dataIndex: 'post',
    key: 'post',
    render: (text, record) => <a href="javascript:void(0)">{text}</a>,
  },
  {
    title: 'Processed',
    dataIndex: 'processed',
    key: 'processed',
  },
  {
    title: 'Sent',
    dataIndex: 'sent',
    key: 'sent',
  },
  {
    title: 'Read (%)',
    dataIndex: 'read',
    key: 'read',
  },
  {
    title: 'Clicks / CTR',
    dataIndex: 'ctr',
    key: 'ctr',
  },
]
class Posting extends React.Component {
  state = {
    tableData: tableData,
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header">
            <div className="utils__title">Scheduled</div>
            <div className="utils__titleDescription">Scheduled Posts</div>
          </div>
          <div className="card-body">
            <Timeline>
              <Timeline.Item>Posted Message 2015-09-01</Timeline.Item>
              <Timeline.Item>Posted Message 2015-09-04</Timeline.Item>
              <Timeline.Item
                dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}
                color="red"
              >
                Failed to Post Message 2015-09-07
              </Timeline.Item>
              <Timeline.Item>Posted Message 2015-09-11</Timeline.Item>
            </Timeline>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="utils__title">History</div>
            <div className="utils__titleDescription">Posting History</div>
          </div>
          <div className="card-body">
            <Table columns={tableColumns} dataSource={this.state.tableData} pagination={false} />
          </div>
        </div>
      </div>
    )
  }
}

export default Posting
