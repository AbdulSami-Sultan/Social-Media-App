/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image} from 'react-native';
import style from './style';
import PropTypes from 'prop-types';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';

const UserPost = props => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.user}>
        <View style={style.userContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDimensions={48}
          />
          <View style={style.userTextContainer}>
            <Text style={style.userName}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text style={style.location}>{props.location}</Text>
            )}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} color="#79869F" size={24} />
      </View>
      <View style={style.postImage}>
        <Image source={props.image} style={style.image} />
      </View>
      <View style={{marginLeft: 10, flexDirection: 'row'}}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesomeIcon icon={faHeart} color="#79869F" />
          <Text style={{marginLeft: 3, color: '#79869F'}}>{props.likes}</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 27}}>
          <FontAwesomeIcon icon={faMessage} color="#79869F" />
          <Text style={{marginLeft: 3, color: '#79869F'}}>
            {props.comments}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 27}}>
          <FontAwesomeIcon icon={faBookmark} color="#79869F" />
          <Text style={{marginLeft: 3, color: '#79869F'}}>
            {props.bookmarks}
          </Text>
        </View>
      </View>
    </View>
  );
};
UserPost.prototype = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  profileImage: PropTypes.any.isRequired,
  image: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};
export default UserPost;
