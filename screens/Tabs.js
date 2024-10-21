import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Songs from './Songs';

const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
      }}>
      <Tab.Screen
        name="Songs"
        component={Songs}
        options={{tabBarLabel: 'Songs'}}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
