import React, { Component } from 'react'
import { Text } from 'react-native'
import { LanguageProvider, LanguageConsumer } from './LanguageContext'
export default function CustomText(textArray) {
  return (
    <LanguageProvider>
      <LanguageConsumer>
        {({ language }) => <Text>{language === 'swahili' ? textArray[0] : textArray[1]}</Text>}
      </LanguageConsumer>
    </LanguageProvider>
  )
}
