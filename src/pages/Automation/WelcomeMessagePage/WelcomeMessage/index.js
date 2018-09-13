import React from 'react'
import { Collapse } from 'antd'

const Panel = Collapse.Panel

class WelcomeMessage extends React.Component {
  render() {
    return (
      <section className="card">
        <div className="card-header">
          <div className="utils__title">
            <strong>WelcomeMessage Page</strong>
          </div>
        </div>
        <div className="card-body">
          <p>
          </p>
        </div>
      </section>
    )
  }
}

export default WelcomeMessage
