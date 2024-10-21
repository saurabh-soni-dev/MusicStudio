import React from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS, FONTS, icons} from '../constants';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Songs from './Songs';
import Artist from './Artist';
import Album from './Album';
import Playlists from './Playlists';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  function renderHeader() {
    return (
      <View style={{padding: 20, backgroundColor: 'black'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text></Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={icons.search}
              style={{height: 20, width: 20, tintColor: 'white', right: 20}}
            />
            <Image
              source={icons.more}
              style={{height: 20, width: 20, tintColor: 'white'}}
            />
          </View>
        </View>
        <Text
          style={{fontSize: 50, color: 'white', textTransform: 'uppercase'}}>
          Music
        </Text>
      </View>
    );
  }

  return (
    <>
      {renderHeader()}
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: COLORS.white,
          tabBarLabelStyle: {...FONTS.h5},
          tabBarStyle: {backgroundColor: 'black'},
        }}>
        <Tab.Screen name="Songs" component={Songs} />
        <Tab.Screen name="Artist" component={Artist} />
        <Tab.Screen name="Album" component={Album} />
        <Tab.Screen name="Playlists" component={Playlists} />
      </Tab.Navigator>
    </>
  );
};

export default Home;
