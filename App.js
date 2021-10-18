import React, { useEffect } from 'react';
//Navigation Libraries
import { NavigationContainer, } from '@react-navigation/native';
import StackScreens from './source/navigation/stack';
import { View, Text } from 'react-native'

const App = () => {
  return (
   
    <NavigationContainer>
      <StackScreens />
    </NavigationContainer>
    
  );
}
export default App;