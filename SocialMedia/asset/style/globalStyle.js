import {StyleSheet} from 'react-native';

const globalStyle = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: 14,
    borderRadius: 100,
    backgroundColor: '#F9FAFB',
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 15,
    height: 15,
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    right: 6,
    top: 6,
  },
  messageNumber: {
    color: 'white',
    fontSize: 10,
  },
  userStoriesContainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },
});

export default globalStyle;
