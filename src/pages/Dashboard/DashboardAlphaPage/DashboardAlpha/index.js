import React from 'react'
import PaymentTx from 'components/CleanComponents/PaymentTx'
import ChartCard from 'components/CleanComponents/ChartCard'
import ChartistGraph from 'react-chartist'
import Chartist from 'chartist'
import { Button, Input, Icon, Tabs, Select, Table } from 'antd'
import data from './data.json'

const TabPane = Tabs.TabPane
const Option = Select.Option

let areaData = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  series: [[5, 9, 7, 8, 5, 3, 5, 4]],
}

let areaOptions = {
  low: 0,
  showArea: true,
  plugins: [Chartist.plugins.tooltip()],
}

class DashboardAlpha extends React.Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <Tabs defaultActiveKey="1">
              <TabPane tab="Active Subscribers" key="1">
                <h5 className="text-black">
                  <strong>Area</strong>
                </h5>

                <div className="mb-5">
                  <ChartistGraph data={areaData} options={areaOptions} type="Line" />
                </div>
              </TabPane>
              <TabPane tab="Net Subscribers" key="2">
                <div />
              </TabPane>
              <TabPane tab="Subscribers & Unsubscribers" key="3">
                <div />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardAlpha
