import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "./App.scss";
import Home from './screens/Home';
import Drives from './screens/Drives';
import SignIn from './screens/SignIn';
import { Provider } from 'react-redux';
import store from './store';
import Students from './screens/Students';

const Stack = createNativeStackNavigator();
export default function App() {
  const [isSignedIn, setisSignedIn] = useState(false);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {
            isSignedIn ? (
              <>
                <Stack.Screen name="Home" initialParams={{"setisSignedIn":setisSignedIn}} component={Home} />
                <Stack.Screen name="View Drives" component={Drives} />
                <Stack.Screen name="View Students" component={Students} />
              </>
            ) : (
              <>
                <Stack.Screen name="SignIn" initialParams={{"setisSignedIn":setisSignedIn}} component={SignIn} />
              </>
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

