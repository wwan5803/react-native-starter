import '@Config/ReactotronConfig'
import DebugConfig from '@Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Platform, StyleSheet, Text, View } from 'react-native'
import RootContainer from './RootContainer'
import createStore from '@Redux'
import { LanguageProvider, LanguageConsumer } from './LanguageContext'

// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render() {
    console.tron.log('hello wesley', __DEV__)

    return (
      <LanguageProvider>
        <Provider store={store}>
          <RootContainer />
        </Provider>
      </LanguageProvider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App)
