import React from 'react';
import {Text} from 'react-native';

import {Container} from './styles';

interface PostCardProps {
  image: string;
  children: React.ReactNode;
}

const PostCard: React.FC<PostCardProps> = ({image, children}) => {
  return (
    <Container imageStyle={{borderRadius: 20}} source={{uri: image}}>
      {children}
    </Container>
  );
};

export default PostCard;
