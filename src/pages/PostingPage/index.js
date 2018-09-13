import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import Posting from './Posting'

class PostingPage extends React.Component {
  static defaultProps = {
    pathName: 'Posting Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Posting Page" />
        <Posting />
      </Page>
    )
  }
}

export default PostingPage
