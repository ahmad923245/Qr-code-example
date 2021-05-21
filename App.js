import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppNavigator from './AppNavigator'
import firebase from 'firebase'
import { firebaseConfig } from './firebase/config'


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

const App = () => {
  return (
    <AppNavigator />
  )
}

export default App

const styles = StyleSheet.create({})
