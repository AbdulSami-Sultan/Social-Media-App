import {StyleSheet} from 'react-native';
import {scaleFontSize} from '../../asset/style/scaling';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontWeight: '700',
    // fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(24),
  },
});

export default style;
