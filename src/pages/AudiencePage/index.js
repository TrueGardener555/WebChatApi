import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import Audience from './Audience'

class AudiencePage extends React.Component {
  static defaultProps = {
    pathName: 'Audience Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Audience Page" />
        <Audience />
      </Page>
    )
  }
}

export default AudiencePage
