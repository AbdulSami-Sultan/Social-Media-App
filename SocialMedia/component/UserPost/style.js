import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  userPostContainer: {
    marginTop: 35,
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
    paddingBottom: 20,
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
    marginLeft: 10,
  },
  userName: {
    color: '#000',
    fontWeight: '600',
    // fontFamily: getFontFamily('Inter', '600'),
    fontSize: 16,
  },
  location: {
    color: '#79869F',
    fontWeight: '400',
    // fontFamily: getFontFamily('Inter', '600'),
    fontSize: 12,
    marginTop: 5,
  },
  postImage: {
    // margin: 30,
    marginVertical: 20,
    width: 300,
    height: 250,
  },
  image: {
    width: 380,
    height: 250,
    borderRadius: 20,
  },
});

export default style;
