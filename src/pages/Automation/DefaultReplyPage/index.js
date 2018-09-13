import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import DefaultReply from './DefaultReply'

class DefaultReplyPage extends React.Component {
  static defaultProps = {
    pathName: 'DefaultReply Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="DefaultReply Page" />
        <DefaultReply />
      </Page>
    )
  }
}

export default DefaultReplyPage
