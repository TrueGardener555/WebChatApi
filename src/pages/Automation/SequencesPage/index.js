import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import Sequences from './Sequences'

class SequencesPage extends React.Component {
  static defaultProps = {
    pathName: 'Sequences Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Sequences Page" />
        <Sequences />
      </Page>
    )
  }
}

export default SequencesPage
