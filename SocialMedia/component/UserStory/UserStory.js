import React from 'react';
import {Text, View} from 'react-native';
import style from './style';
import PropTypes from 'prop-types';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {horizontalScale} from '../../asset/style/scaling';

const UserStory = props => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage
        profileImage={props.profileImage}
        imageDimensions={horizontalScale(65)}
      />
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};
UserStory.prototype = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
};
export default UserStory;
