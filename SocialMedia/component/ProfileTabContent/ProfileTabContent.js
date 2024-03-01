import React from 'react';
import style from './style';
import {Image, View, ScrollView} from 'react-native';

const ProfileTabContent = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.profileTabContentContainer}>
      <View style={style.profileTabContent}>
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../asset/images/post1.jpeg')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../asset/images/post2.jpeg')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../asset/images/post3.jpeg')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../asset/images/post4.jpg')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../asset/images/post5.jpeg')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../asset/images/post1.jpeg')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../asset/images/post2.jpeg')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../asset/images/post3.jpeg')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../asset/images/post4.jpg')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../asset/images/post5.jpeg')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
