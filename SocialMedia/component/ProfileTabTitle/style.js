import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize} from '../../asset/style/scaling';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontWeight: '500',
    fontSize: scaleFontSize(16),
    padding: horizontalScale(15),
  },
  titleNotFocused: {
    color: '#79869F',
    fontFamily: '500',
  },
});

export default style;
