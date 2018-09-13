import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import MainMenu from './MainMenu'

class MainMenuPage extends React.Component {
  static defaultProps = {
    pathName: 'MainMenu Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="MainMenu Page" />
        <MainMenu />
      </Page>
    )
  }
}

export default MainMenuPage
