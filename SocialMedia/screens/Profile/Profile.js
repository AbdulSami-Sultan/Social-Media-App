import React from 'react';
import {SafeAreaView, ScrollView, View, Image, Text} from 'react-native';
import globalStyle from '../../asset/style/globalStyle';
import style from './style';
import {ProfileTabsNavigation} from '../../navigation/MainNavigation';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={{flexGrow: globalStyle.flexGrow}}>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image
              source={require('../../asset/images/sample1.png')}
              style={style.profileImage}
            />
          </View>
        </View>
        <Text style={style.userName}>John Smith</Text>
        <View style={style.statContainer}>
          <View>
            <Text style={style.statAmount}>45</Text>
            <Text style={style.statType}>Following</Text>
          </View>
          <View style={style.statBorder} />
          <View>
            <Text style={style.statAmount}>30</Text>
            <Text style={style.statType}>Followers</Text>
          </View>
          <View style={style.statBorder} />
          <View>
            <Text style={style.statAmount}>100</Text>
            <Text style={style.statType}>Post</Text>
          </View>
        </View>
        <View style={globalStyle.flexWtihHeight}>
          <ProfileTabsNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
