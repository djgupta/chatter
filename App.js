
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './components/Chat';
  
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chat">
        <Stack.Screen name="Go Goa Gone" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;