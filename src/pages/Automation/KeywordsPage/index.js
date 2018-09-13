import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import Keywords from './Keywords'

class KeywordsPage extends React.Component {
  static defaultProps = {
    pathName: 'Keywords Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Keywords Page" />
        <Keywords />
      </Page>
    )
  }
}

export default KeywordsPage
