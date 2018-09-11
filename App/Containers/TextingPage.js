import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class TestPage extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.sectionText}>This is a testing page!!!</Text>
      </View>
    )
  }
}
