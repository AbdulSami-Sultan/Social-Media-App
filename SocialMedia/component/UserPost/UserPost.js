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
import {horizontalScale, scaleFontSize} from '../../asset/style/scaling';

const UserPost = props => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.user}>
        <View style={style.userContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDimensions={horizontalScale(48)}
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
        <FontAwesomeIcon
          icon={faEllipsisH}
          color="#79869F"
          size={scaleFontSize(24)}
        />
      </View>
      <View style={style.postImage}>
        <Image source={props.image} style={style.image} />
      </View>
      <View style={style.userPostStats}>
        <View style={style.userPostStatsButton}>
          <FontAwesomeIcon icon={faHeart} color="#79869F" />
          <Text style={style.userPostText}>{props.likes}</Text>
        </View>
        <View style={style.userPostStatsButtonRight}>
          <FontAwesomeIcon icon={faMessage} color="#79869F" />
          <Text style={style.userPostText}>{props.comments}</Text>
        </View>
        <View style={style.userPostStatsButtonRight}>
          <FontAwesomeIcon icon={faBookmark} color="#79869F" />
          <Text style={style.userPostText}>{props.bookmarks}</Text>
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
