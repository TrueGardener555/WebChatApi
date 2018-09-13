import React from 'react'
import { Collapse } from 'antd'
import './style.scss'

const Panel = Collapse.Panel

class AutoPosting extends React.Component {
  render() {
    return (
      <section className="card">
        <div className="card-header">
          <div className="utils__title">
            <i className="icmn-facebook" />
            Creta
          </div>
          <div className="utils__titleDescription">
              Account: cretamoda
          </div>
        </div>
        <div className="card-body">
          <p>
          <div className="AutoPostingPage__overall-data">
              <ul className="AutoPostingPage__overall-data-list">
                <li className="AutoPostingPage__overall-data-item">
                  <a href="javascript: void(0);" className="AutoPostingPage__overall-data-link">
                    Disabled
                  </a>
                </li>
                <li className="AutoPostingPage__overall-data-item">
                  <a href="javascript: void(0);" className="AutoPostingPage__overall-data-link">
                    <i className="AutoPostingPage__overall-data-icon fa fa-th-list mr-2" />
                    No Filter
                  </a>
                </li>
                <li className="AutoPostingPage__overall-data-item">
                  <a href="javascript: void(0);" className="AutoPostingPage__overall-data-link">
                    <i className="AutoPostingPage__overall-data-icon fa fa-hourglass-half mr-2" />
                    Send all at the same time
                  </a>
                </li>
                <li className="AutoPostingPage__overall-data-item">
                  <a href="javascript: void(0);" className="AutoPostingPage__overall-data-link">
                    <i className="AutoPostingPage__overall-data-icon fa fa-bell mr-2" />
                    Regular
                  </a>
                </li>
              </ul>
            </div>
          </p>
        </div>
      </section>
    )
  }
}

export default AutoPosting
