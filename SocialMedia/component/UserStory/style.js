import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../asset/style/scaling';

const style = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(20),
    fontWeight: '700',
    // fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(24),
  },
  firstName: {
    color: '#022150',
    fontWeight: '500',
    marginTop: verticalScale(8),
    fontSize: scaleFontSize(14),
    textAlign: 'center',
  },
});

export default style;
