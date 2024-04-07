import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import Home from './screens/Home';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Main = () => {
  const Stack = createNativeStackNavigator();
  // return <Home />;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
            headerRight: () => (
              <FontAwesome name="navicon" color={'black'} size={25} />
            ),
            headerBackVisible: false,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#f7cebe',
            },
          }}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;

const styles = StyleSheet.create({});
