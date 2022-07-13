import React, {useCallback, useRef, useState} from 'react';
import {
  FlatList,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {
  Container,
  FooterContainer,
  SliderContainer,
  PaginationDot,
} from './styles';
import HeroSVG from '../../assets/images/hero.svg';
import HeroSVG2 from '../../assets/images/hero2.svg';

interface Image {
  id: number;
  image: React.ReactNode;
}

const mockImages: Image[] = [
  {
    id: 1,
    image: <HeroSVG />,
  },
  {
    id: 2,
    image: <HeroSVG2 />,
  },
  {
    id: 3,
    image: <HeroSVG2 />,
  },
];

export const Carrousel: React.FC = () => {
  const flatlistRef = useRef<FlatList>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const indexRef = useRef(activeIndex);
  indexRef.current = activeIndex;

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const scrollIndex = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(scrollIndex);

      const distance = Math.abs(roundIndex - scrollIndex);

      const isNoMansLand = distance > 0.4;

      if (roundIndex !== indexRef.current && !isNoMansLand) {
        setActiveIndex(roundIndex);
      }
    },
    [],
  );

  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: Dimensions.get('window').width,
      offset: Dimensions.get('window').width * index,
      index,
    }),
    [],
  );

  const renderItem = (item: Image) => {
    return <SliderContainer>{item.image}</SliderContainer>;
  };

  return (
    <Container>
      <FlatList
        ref={flatlistRef}
        scrollEnabled
        pagingEnabled
        getItemLayout={getItemLayout}
        horizontal
        onScroll={onScroll}
        style={{flex: 1}}
        showsHorizontalScrollIndicator={false}
        data={mockImages}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.id}
      />
      <FooterContainer>
        {mockImages.map((_, index) => (
          <PaginationDot
            isLast={index === mockImages.length - 1}
            active={activeIndex === index}
          />
        ))}
      </FooterContainer>
    </Container>
  );
};
