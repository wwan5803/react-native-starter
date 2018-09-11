import React, { Component } from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import { Button, Text, Icon, Footer, FooterTab } from 'native-base'

import stackNav from './StackNav'

import News from '@Containers/News'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    )
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    )
  }
}

export default (MainScreenNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: stackNav,
      navigationOptions: {
        tabBarLabel: 'Tab 1',
        // tabBarIcon: ({ tintColor }) => <Icon name={"glass"} size={30} color={tintColor} />
      },
    },
    Settings: SettingsScreen,
  },
  {
    tabBarComponent: props => {
      console.tron.log('props', props)
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigation.state.index === 0}
              onPress={() => props.navigation.navigate('Home')}
            >
              <Icon type="FontAwesome" name="home" />
              <Text>News</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 1}
              onPress={() => props.navigation.navigate('Settings')}
            >
              <Icon type="FontAwesome" name="book" />
              <Text>Setting</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    },
  },
))
