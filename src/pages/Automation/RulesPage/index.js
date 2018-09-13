import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import Rules from './Rules'

class RulesPage extends React.Component {
  static defaultProps = {
    pathName: 'Rules Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Rules Page" />
        <Rules />
      </Page>
    )
  }
}

export default RulesPage
