import * as React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Songs from './screens/Songs';
import Artist from './screens/Artist';
import {ArtistsAllSongs} from './screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Songs" component={Songs} />
        <Stack.Screen name="Artist" component={Artist} />
        <Stack.Screen name="ArtistsAllSongs" component={ArtistsAllSongs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
