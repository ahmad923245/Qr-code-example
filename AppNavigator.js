// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import QrCodeExample from './screens/QrCodeExample';
import QrDetails from './screens/QrDetails';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Qrcode" component={QrCodeExample} />
        <Stack.Screen name="QrDetails" component={QrDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;