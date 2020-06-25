import * as React from 'react';
import { Button, View, Text } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import Friends from './Friends';



const Stack = createStackNavigator();

function AppNavigator() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Friends" component={Friends} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;