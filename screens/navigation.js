import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import TampilkanData from './tampilData';
import TambahData from './Tambahdata';



const Stack = createStackNavigator ();

function AppScreens () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="tampil_data" component={TampilkanData} />
        <Stack.Screen name="TambahData" component={TambahData} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppScreens;
