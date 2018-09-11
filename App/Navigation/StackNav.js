import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'
import NewsDetail from '@Containers/NewsDetail'
import News from '@Containers/News'
import styles from './Styles/NavigationStyles'

const stackNav = StackNavigator(
  {
    News: {
      screen: News,
      navigationOptions: ({ navigation }) => ({
        title: 'News',
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
            <Text>test</Text>
          </TouchableOpacity>
        ),
        headerStyle: { paddingRight: 10, paddingLeft: 10 },
      }),
    },
    NewsDetail: {
      screen: NewsDetail,
      navigationOptions: ({ navigation }) => ({
        title: 'News Detail',
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>test</Text>
          </TouchableOpacity>
        ),
        headerStyle: { paddingRight: 10, paddingLeft: 10 },
      }),
    },
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'News',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
)

export default stackNav
