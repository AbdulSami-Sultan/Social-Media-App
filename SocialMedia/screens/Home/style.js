import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../asset/style/scaling';

const style = StyleSheet.create({
  header: {
    marginLeft: horizontalScale(27),
    marginRight: horizontalScale(17),
    marginTop: verticalScale(30),
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: horizontalScale(14),
    borderRadius: horizontalScale(100),
    backgroundColor: '#F9FAFB',
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    flexDirection: 'row',
    width: horizontalScale(15),
    height: horizontalScale(15),
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    right: horizontalScale(6),
    top: verticalScale(6),
  },
  messageNumber: {
    color: 'white',
    fontSize: scaleFontSize(10),
  },
  userStoriesContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(28),
  },
  userPostContainer: {
    // marginTop: 20,
    marginHorizontal: horizontalScale(24),
  },
});

export default style;
