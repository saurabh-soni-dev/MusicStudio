import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import {COLORS, FONTS, icons} from '../constants';

const ArtistsAllSongs = ({route, navigation}) => {
  const {name} = route.params;
  const songs = [
    {
      id: 1,
      name: 'Kesariya(Pagalworld.com.se)',
      description: 'Arijit Singh - Brahmastra - 2022 - Pagalworl...',
    },
  ];

  const [songsData, setSongsData] = React.useState(songs);

  function renderHeader() {
    return (
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center'}}
        onPress={() => navigation.goBack()}>
        <Image
          source={icons.back}
          style={{
            height: 20,
            width: 20,
            tintColor: COLORS.darkGray,
          }}
        />
        <Text style={{fontSize: 18, color: COLORS.darkGray, left: 10}}>
          {name}
        </Text>
      </TouchableOpacity>
    );
  }

  function renderSongsDetails() {
    return (
      <View style={{marginTop: 15}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <ImageBackground
              style={{
                backgroundColor: COLORS.rose_600,
                padding: 8,
                borderRadius: 50,
              }}>
              <Image
                source={icons.play}
                style={{
                  height: 10,
                  width: 10,
                  tintColor: 'white',
                }}
              />
            </ImageBackground>
            <Text style={{...FONTS.h3, color: COLORS.darkGray, left: 20}}>
              Play all
            </Text>
            <Text style={{...FONTS.h3, color: COLORS.gray, left: 25}}>
              1 song
            </Text>
          </View>
          <TouchableOpacity>
            <Image
              source={icons.filter}
              style={{height: 20, width: 20, tintColor: COLORS.darkGray}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderSongs() {
    const renderItem = ({item, index}) => (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text
            style={{
              ...FONTS.h3,
              color: index == 0 ? COLORS.rose_600 : 'white',
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              ...FONTS.h4,
              color: index == 0 ? COLORS.rose_600 : COLORS.gray2,
            }}>
            {item.description}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setSongsModal(true), setModalData({description: item.description});
          }}>
          <Image
            source={icons.more}
            style={{height: 20, width: 20, tintColor: COLORS.gray2}}
          />
        </TouchableOpacity>
      </View>
    );
    return (
      <FlatList
        contentContainerStyle={{marginTop: 20, paddingBottom: 300}}
        data={songsData}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        ItemSeparatorComponent={<View style={{marginVertical: 8}}></View>}
      />
    );
  }
  return (
    <View style={{padding: 20}}>
      {renderHeader()}
      {renderSongsDetails()}
      {renderSongs()}
    </View>
  );
};

export default ArtistsAllSongs;
