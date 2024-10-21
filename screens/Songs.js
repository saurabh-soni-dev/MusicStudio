import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {COLORS, FONTS, icons} from '../constants';

const Songs = () => {
  const songs = [
    {
      id: 1,
      name: '3 59 AM - Pagalworld.mobi',
      description: 'DIVINE - Pagalworld.mobi - Punya Paap - ... ',
    },
    {
      id: 2,
      name: 'Arijit Singh : Rahe Na Rahe Hum L...',
      description: 'Tribute to Lata Mangeshkar_Mohammed R_S...',
    },
    {
      id: 3,
      name: 'Kesariya(Pagalworld.com.se)',
      description: 'Arijit Singh - Brahmastra - 2022 - Pagalworld.c...',
    },
  ];

  const [songsData, setSongsData] = React.useState(songs);
  const [songsModal, setSongsModal] = React.useState(false);
  const [modalData, setModalData] = React.useState('');

  const renderItem = ({item, index}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View>
        <Text
          style={{...FONTS.h3, color: index == 0 ? COLORS.rose_600 : 'white'}}>
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

  function renderSongsModal() {
    return (
      <Modal animationType="slide" transparent={true} visible={songsModal}>
        <TouchableWithoutFeedback onPress={() => setSongsModal(false)}>
          <View style={{flex: 1, backgroundColor: COLORS.transparentBlack5}}>
            <View
              style={{
                top: '30%',
                height: '70%',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                padding: 30,
                backgroundColor: COLORS.darkGray,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={icons.user}
                  style={{height: 20, width: 20, tintColor: 'white'}}
                />
                <Text style={{left: 15, ...FONTS.h3, color: 'white'}}>
                  {modalData.description}
                </Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
  return (
    <View style={{padding: 20, backgroundColor: 'black'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
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
          <Text style={{left: 10, ...FONTS.h3, color: 'white'}}>Play all</Text>
          <Text style={{left: 20, ...FONTS.h3, color: COLORS.gray2}}>
            3 songs
          </Text>
        </View>
        <Image
          source={icons.filter}
          style={{height: 18, width: 18, tintColor: 'white'}}
        />
      </View>
      <FlatList
        contentContainerStyle={{marginTop: 20, paddingBottom: 300}}
        data={songsData}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        ItemSeparatorComponent={<View style={{marginVertical: 8}}></View>}
      />
      {renderSongsModal()}
    </View>
  );
};

export default Songs;
