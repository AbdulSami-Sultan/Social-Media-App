import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from '../../asset/style/scaling';

const style = StyleSheet.create({
  profileImage: {
    width: horizontalScale(110),
    height: horizontalScale(110),
    borderRadius: horizontalScale(110),
  },
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  profileImageContent: {
    borderWidth: 1,
    borderColor: '#0150EC',
    padding: horizontalScale(4),
    borderRadius: horizontalScale(110),
  },
  userName: {
    marginTop: verticalScale(20),
    textAlign: 'center',
    fontWeight: '600',
    fontSize: scaleFontSize(30),
  },
  statAmount: {
    fontWeight: '600',
    fontSize: scaleFontSize(30),
    color: '#022150',
    textAlign: 'center',
  },
  statType: {
    fontWeight: '400',
    fontSize: scaleFontSize(16),
    color: '#79869F',
    textAlign: 'center',
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(40),
    paddingVertical: verticalScale(30),
    borderBottomWidth: 1,
    borderColor: '#E9EFF1',
  },
  statBorder: {
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
  },
});

export default style;
