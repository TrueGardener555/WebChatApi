import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import GrowthTools from './GrowthTools'

class GrowthToolsPage extends React.Component {
  static defaultProps = {
    pathName: 'Audience Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Audience Page" />
        <GrowthTools />
      </Page>
    )
  }
}

export default GrowthToolsPage
