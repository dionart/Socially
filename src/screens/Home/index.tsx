import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Container, ListHeaderContainer, ProfileImage} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import Svg, {Defs, LinearGradient, Rect, Stop} from 'react-native-svg';
import PostCard from '@/components/PostCard';
import {Text} from '@/components/Text';
import {theme} from '@/config/theme';
import {Box} from '@/components/Box';

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

  const renderFeedItem = (item: any) => <PostCard item={item} />;

  return (
    <Container>
      <Box style={{paddingTop: insets.top}} paddingLeft={24}>
        <Text marginTop={47 + insets.top} align="left" type="H2">
          Feed
        </Text>
      </Box>
      <Box style={{flex: 1}} marginTop={40} paddingLeft={24} paddingRight={24}>
        <FlatList
          ListHeaderComponent={() => (
            <Box marginBottom={40}>
              <FlatList
                horizontal
                data={slideList || []}
                ListHeaderComponent={() => renderHeader()}
                ItemSeparatorComponent={() => <Box style={{width: 30}} />}
                renderItem={({item}) => renderItem(item)}
                keyExtractor={item => item.id.toString()}
              />
            </Box>
          )}
          data={slideList}
          renderItem={({item}) => renderFeedItem(item)}
          ItemSeparatorComponent={() => <Box style={{height: 36}} />}
        />
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
