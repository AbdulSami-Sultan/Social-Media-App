import React from 'react';
import {View, Image} from 'react-native';
import style from './style';
import PropTypes from 'prop-types';

const UserImage = props => {
  return (
    <View
      style={[style.userImageContainer, {borderRadius: props.imageDimensions}]}>
      <Image
        source={props.profileImage}
        style={{
          width: props.imageDimensions,
          height: props.imageDimensions,
          borderRadius: props.imageDimensions,
        }}
      />
    </View>
  );
};
UserImage.prototype = {
  profileImage: PropTypes.string.isRequired,
  imageDimensions: PropTypes.number.isRequired,
};
export default UserImage;
