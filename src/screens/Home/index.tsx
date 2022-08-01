import React, {useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Badge, Container, ListHeaderContainer, ProfileImage} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Svg, {Defs, LinearGradient, Rect, Stop} from 'react-native-svg';
import PostCard from '@/components/PostCard';
import {Text} from '@/components/Text';
import {theme} from '@/config/theme';
import {Box} from '@/components/Box';
import {Row} from '@/components/Row';

interface SliderItem {
  id: number;
  image: string;
}

const slideList: SliderItem[] = Array.from({length: 5}).map((_, i) => {
  return {
    id: i,
    image: `https://picsum.photos/1440/2842?random=${i}`,
  };
});

const Home: React.FC = () => {
  const insets = useSafeAreaInsets();
  const [liked, setLiked] = useState(false);

  const heartIcon = liked ? 'heart' : 'heart-o';

  const renderItem = (item: SliderItem) => {
    return (
      <TouchableOpacity>
        <ProfileImage source={{uri: item.image}} />
      </TouchableOpacity>
    );
  };

  const renderHeader = () => {
    return (
      <ListHeaderContainer style={styles.shadow}>
        <Background />
        <Icon size={26} name="plus" />
      </ListHeaderContainer>
    );
  };

  return (
    <Container>
      <Box style={{paddingTop: insets.top}} paddingLeft={24}>
        <Text marginTop={47 + insets.top} align="left" type="H2">
          Feed
        </Text>
        <Box marginTop={30}>
          <FlatList
            horizontal
            data={slideList}
            ListHeaderComponent={() => renderHeader()}
            ItemSeparatorComponent={() => <Box style={{width: 30}} />}
            renderItem={({item}) => renderItem(item)}
          />
        </Box>
      </Box>
      <Box marginTop={40} paddingLeft={24} paddingRight={24}>
        <PostCard image={slideList[0].image}>
          <Box
            paddingLeft={13}
            paddingTop={13}
            paddingRight={16}
            paddingBottom={12}
            style={{flex: 1}}>
            <Box style={{flex: 1}}>
              <Row spaceBetween center>
                <Row>
                  <ProfileImage
                    bordered={false}
                    size={37}
                    source={{uri: slideList[1].image}}
                  />
                  <Box marginLeft={7}>
                    <Text color={theme.grays.light} type="captions">
                      Dennis Reynolds
                    </Text>
                    <Text color={theme.grays.gray_lighter} type="captions">
                      2 hrs ago
                    </Text>
                  </Box>
                </Row>
                <TouchableOpacity>
                  <Icon
                    name="more-vertical"
                    size={24}
                    color={theme.grays.light}
                  />
                </TouchableOpacity>
              </Row>
            </Box>
            <Row
              center
              style={{
                justifyContent: 'space-around',
                paddingHorizontal: 33,
              }}>
              <Badge>
                <Row center>
                  <TouchableOpacity onPress={() => setLiked(!liked)}>
                    <FontAwesome
                      name={heartIcon}
                      size={16}
                      color={theme.grays.light}
                    />
                  </TouchableOpacity>
                  <Text
                    marginLeft={8}
                    color={theme.grays.light}
                    type="captions">
                    5.2K
                  </Text>
                </Row>
              </Badge>
              <Badge>
                <Row center>
                  <Icon
                    name="message-square"
                    size={16}
                    color={theme.grays.light}
                  />
                  <Text
                    marginLeft={8}
                    color={theme.grays.light}
                    type="captions">
                    5.2K
                  </Text>
                </Row>
              </Badge>
              <Badge>
                <Row center>
                  <Icon name="bookmark" size={16} color={theme.grays.light} />
                  <Text
                    marginLeft={8}
                    color={theme.grays.light}
                    type="captions">
                    5.2K
                  </Text>
                </Row>
              </Badge>
            </Row>
          </Box>
        </PostCard>
      </Box>
    </Container>
  );
};

const Background = () => {
  return (
    <Svg style={StyleSheet.absoluteFillObject}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          gradientUnits="userSpaceOnUse"
          x1="90.98%"
          x2="10.01%"
          y1="15%"
          y2="120%">
          <Stop offset={0.462} stopColor={theme.mainColors.light_blue} />
          <Stop offset={0} stopColor={theme.accents.light_pink} />
          <Stop offset={1} stopColor={theme.grays.light} />
        </LinearGradient>
      </Defs>
      <Rect width="100%" height="100%" fill="url(#prefix__a)" />
    </Svg>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});

export default Home;
