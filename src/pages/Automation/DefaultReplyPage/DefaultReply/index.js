import React from 'react'
import { Collapse } from 'antd'

const Panel = Collapse.Panel

class DefaultReply extends React.Component {
  render() {
    return (
      <section className="card">
        <div className="card-header">
          <div className="utils__title">
            <strong>DefaultReply Page</strong>
          </div>
        </div>
        <div className="card-body">
          <p />
        </div>
      </section>
    )
  }
}

export default DefaultReply
