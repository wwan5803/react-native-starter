import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import {
  Container,
  Content,
  Text,
  StyleProvider,
  Footer,
  FooterTab,
  Icon,
  Button,
} from 'native-base'
import AppNavigation from '@Navigation/AppNavigation'
import { connect } from 'react-redux'
import NavigationService from '@Services/NavigationService'
import StartupActions from '@Redux/StartupRedux'
import getTheme from '@native-base-theme/components'
import material from '@native-base-theme/variables/material'
import { LanguageConsumer } from './LanguageContext'

// import ReduxPersist from '../Config/ReduxPersist'

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  componentDidMount() {
    this.props.startup()
    // if redux persist is not active fire startup action
    // if (!ReduxPersist.active) {
    //   this.props.startup()
    // }
  }

  render() {
    const { navigation } = this.props
    return (
      <LanguageConsumer>
        {({ language, changeLanguage }) => {
          console.tron.log('context', language)
          return (
            <StyleProvider style={getTheme(material)}>
              <Container>
                <StatusBar barStyle="light-content" />
                <AppNavigation
                  ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef)
                  }}
                />
              </Container>
            </StyleProvider>
          )
        }}
      </LanguageConsumer>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup()),
})

const mapStateToProps = state => ({
  github: state.github,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootContainer)
