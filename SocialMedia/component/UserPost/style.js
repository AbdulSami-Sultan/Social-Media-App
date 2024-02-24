import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../asset/style/scaling';

const style = StyleSheet.create({
  userPostContainer: {
    marginTop: verticalScale(35),
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
    paddingBottom: verticalScale(20),
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userContainer: {
    flexDirection: 'row',
  },
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: horizontalScale(10),
  },
  userName: {
    color: '#000',
    fontWeight: '600',
    // fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(16),
  },
  location: {
    color: '#79869F',
    fontWeight: '400',
    // fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(12),
    marginTop: verticalScale(5),
  },
  postImage: {
    // margin: 30,
    marginVertical: verticalScale(20),
    width: 300,
    height: 250,
  },
  image: {
    width: 380,
    height: 250,
    borderRadius: 20,
  },
  userPostStats: {marginLeft: horizontalScale(10), flexDirection: 'row'},
  userPostStatsButton: {flexDirection: 'row'},
  userPostStatsButtonRight: {
    flexDirection: 'row',
    marginLeft: horizontalScale(27),
  },
  userPostText: {marginLeft: horizontalScale(3), color: '#79869F'},
});

export default style;
