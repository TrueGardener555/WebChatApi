import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import WelcomeMessage from './WelcomeMessage'

class WelcomeMessagePage extends React.Component {
  static defaultProps = {
    pathName: 'WelcomeMessage Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="WelcomeMessage Page" />
        <WelcomeMessage />
      </Page>
    )
  }
}

export default WelcomeMessagePage
