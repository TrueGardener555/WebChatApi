import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import AutoPosting from './AutoPosting'

class AutoPostingPage extends React.Component {
  static defaultProps = {
    pathName: 'AutoPosting Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="AutoPosting Page" />
        <AutoPosting />
      </Page>
    )
  }
}

export default AutoPostingPage
