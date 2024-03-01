import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../asset/style/scaling';

const style = StyleSheet.create({
  profileTabContentContainer: {
    backgroundColor: '#FFFFFF',
  },
  profileTabContent: {
    paddingHorizontal: horizontalScale(21),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  image: {
    width: horizontalScale(150),
    height: verticalScale(80),
    marginTop: verticalScale(11),
    borderRadius: 20,
    resizeMode: 'cover',
  },
});

export default style;
