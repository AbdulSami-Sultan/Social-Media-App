import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  StatusBar,
} from 'react-native';
import Title from '../../component/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import style from './style';
import UserStory from '../../component/UserStory/UserStory';
import UserPost from '../../component/UserPost/UserPost';
import {scaleFontSize} from '../../asset/style/scaling';
import globalStyle from '../../asset/style/globalStyle';

const Home = () => {
  const userStories = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('../../asset/images/sample1.png'),
    },
    {
      firstName: 'Angel',
      id: 2,
      profileImage: require('../../asset/images/sample2.jpg'),
    },
    {
      firstName: 'White',
      id: 3,
      profileImage: require('../../asset/images/sample3.jpg'),
    },
    {
      firstName: 'Olivier',
      id: 4,
      profileImage: require('../../asset/images/sample4.jpg'),
    },
    {
      firstName: 'Nata',
      id: 5,
      profileImage: require('../../asset/images/sample5.jpg'),
    },
    {
      firstName: 'Nicolas',
      id: 6,
      profileImage: require('../../asset/images/sample6.jpg'),
    },
    {
      firstName: 'Nina',
      id: 7,
      profileImage: require('../../asset/images/sample7.jpg'),
    },
    {
      firstName: 'Nana',
      id: 8,
      profileImage: require('../../asset/images/sample8.jpeg'),
    },
    {
      firstName: 'Ben',
      id: 9,
      profileImage: require('../../asset/images/sample9.jpeg'),
    },
  ];
  const userPosts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Boston MA',
      image: require('../../asset/images/post1.jpeg'),
      profileImage: require('../../asset/images/sample8.jpeg'),
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Worester MA',
      image: require('../../asset/images/post2.jpeg'),
      profileImage: require('../../asset/images/sample5.jpg'),
      likes: 1302,
      comments: 42,
      bookmarks: 43,
      id: 2,
    },
    {
      firstName: 'John',
      lastName: 'Titam',
      location: 'Sydney, Australia',
      image: require('../../asset/images/post3.jpeg'),
      profileImage: require('../../asset/images/sample2.jpg'),
      likes: 2343,
      comments: 44,
      bookmarks: 2,
      id: 3,
    },
    {
      firstName: 'Shwan',
      lastName: 'Murphy',
      location: 'New York, USA',
      image: require('../../asset/images/post4.jpg'),
      profileImage: require('../../asset/images/sample3.jpg'),
      likes: 542,
      comments: 64,
      bookmarks: 234,
      id: 4,
    },
    {
      firstName: 'Ben',
      lastName: 'Nicolas',
      location: 'Berlin, Germany',
      image: require('../../asset/images/post5.jpeg'),
      profileImage: require('../../asset/images/sample1.png'),
      likes: 53289,
      comments: 22,
      bookmarks: 2223,
      id: 5,
    },
  ];

  const userStoriesPagesize = 4;
  const [userStoryCurrentPage, setUserStoryCurrentPage] = useState(1);
  const [userStoryRenderedData, setUserStoryRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostPagesize = 2;
  const [userPostCurrentPage, setUserPostCurrentPage] = useState(1);
  const [userPostRenderedData, setUserPostRenderedData] = useState([]);
  const [isLoadingUserPost, setIsLoadingUserPost] = useState(false);

  const pagination = (database, currentPage, pagesize) => {
    const startIndex = (currentPage - 1) * pagesize;
    const endIndex = startIndex + pagesize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPagesize);
    setUserStoryRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPost(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostPagesize);
    setUserPostRenderedData(getInitialDataPosts);
    setIsLoadingUserPost(false);
  }, []);

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <StatusBar backgroundColor={'red'} barStyle={'dark-content'} />
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={style.header}>
                <Title title={"Let's Explore"} />
                <TouchableOpacity style={style.messageIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size={scaleFontSize(20)}
                    color={'#898DAE'}
                  />
                  <View style={style.messageNumberContainer}>
                    <Text style={style.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={style.userStoriesContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUserStories) {
                      return;
                    }
                    setIsLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoryCurrentPage + 1,
                      userStoriesPagesize,
                    );
                    if (contentToAppend.length > 0) {
                      setUserStoryCurrentPage(userStoryCurrentPage + 1);
                      setUserStoryRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }
                    setIsLoadingUserStories(false);
                  }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={userStoryRenderedData}
                  renderItem={({item}) => (
                    <UserStory
                      key={'userStory' + item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserPost) {
              return;
            }
            setIsLoadingUserPost(true);
            const contentToAppend = pagination(
              userPosts,
              userPostCurrentPage + 1,
              userPostPagesize,
            );
            if (contentToAppend.length > 0) {
              setUserPostCurrentPage(userPostCurrentPage + 1);
              setUserPostRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserPost(false);
          }}
          showsVerticalScrollIndicator={false}
          data={userPostRenderedData}
          renderItem={({item}) => (
            <View style={style.userPostContainer}>
              <UserPost
                firstName={item.firstName}
                lastName={item.lastName}
                location={item.location}
                likes={item.likes}
                comments={item.comments}
                bookmarks={item.bookmarks}
                image={item.image}
                profileImage={item.profileImage}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
