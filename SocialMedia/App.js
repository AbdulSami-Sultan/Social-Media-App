import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';
import Title from './component/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import globalStyle from './asset/style/globalStyle';
import UserStory from './component/UserStory/UserStory';

const App = () => {
  const userStories = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('./asset/images/sample1.png'),
    },
    {
      firstName: 'Angel',
      id: 2,
      profileImage: require('./asset/images/sample2.jpg'),
    },
    {
      firstName: 'White',
      id: 3,
      profileImage: require('./asset/images/sample3.jpg'),
    },
    {
      firstName: 'Olivier',
      id: 4,
      profileImage: require('./asset/images/sample4.jpg'),
    },
    {
      firstName: 'Nata',
      id: 5,
      profileImage: require('./asset/images/sample5.jpg'),
    },
    {
      firstName: 'Nicolas',
      id: 6,
      profileImage: require('./asset/images/sample6.jpg'),
    },
    {
      firstName: 'Nina',
      id: 7,
      profileImage: require('./asset/images/sample7.jpg'),
    },
    {
      firstName: 'Nana',
      id: 8,
      profileImage: require('./asset/images/sample8.jpeg'),
    },
    {
      firstName: 'Ben',
      id: 9,
      profileImage: require('./asset/images/sample9.jpeg'),
    },
  ];
  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Title title={"Let's Explore"} />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyle.userStoriesContainer}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={userStories}
          renderItem={({item}) => (
            <UserStory
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
