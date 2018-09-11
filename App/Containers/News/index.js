import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button } from 'react-native'

// Styles
import styles from '../Styles/LaunchScreenStyles'

export default class News extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>News!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('NewsDetail')}
        />
      </View>
    )
  }
}
