import React from 'react'
import { StyleSheet } from 'react-native'
import { theme } from '../core/theme'
import { View } from "react-native"

export default function UserIndicator({style}) {
  return (
    <View
      style={[
        styles.view,
      ]}
    />
  )
}

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    right: 15,
    top: 40,
    width: 100,
    height: 100,
    paddingVertical: 1,
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
