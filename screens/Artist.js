import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {FONTS, SIZES, COLORS, icons, images} from '../constants';

const Artist = ({navigation}) => {
  const ArtistsData = [
    {id: 1, name: 'Arijit Singh'},
    {id: 2, name: 'DIVINE - Pagalworld.mobi'},
    {id: 3, name: 'Tribute to Lata Mangesh... '},
  ];

  const [artists, setArtists] = React.useState(ArtistsData);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
      }}
      onPress={() => navigation.navigate('ArtistsAllSongs', {name: item.name})}>
      <Text style={{...FONTS.h3, color: COLORS.darkGray}}>{item.name}</Text>
      <Image
        source={icons.right}
        style={{height: 20, width: 20, tintColor: COLORS.darkGray2}}
      />
    </TouchableOpacity>
  );

  return (
    <View style={{padding: 20}}>
      <Text style={{...FONTS.h3, color: COLORS.darkGray}}>3 artists</Text>
      <FlatList
        contentContainerStyle={{marginTop: 20, paddingBottom: 300}}
        data={artists}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        ItemSeparatorComponent={<View style={{marginVertical: 8}}></View>}
      />
    </View>
  );
};

export default Artist;
