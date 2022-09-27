import {theme} from '@/config/theme';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Box} from '../Box';
import {Row} from '../Row';
import {Text} from '../Text';

import {Badge, Container, ProfileImage} from './styles';

interface PostCardProps {
  item: any;
}

const PostCard: React.FC<PostCardProps> = ({item}) => {
  const [liked, setLiked] = useState(false);

  const heartIcon = liked ? 'heart' : 'heart-o';

  return (
    <Container
      imageStyle={{borderRadius: 20, opacity: 0.9}}
      source={{uri: item.image}}>
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
                source={{uri: item.image}}
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
              <Icon name="more-vertical" size={24} color={theme.grays.light} />
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
              <Text marginLeft={8} color={theme.grays.light} type="captions">
                5.2K
              </Text>
            </Row>
          </Badge>
          <Badge>
            <Row center>
              <Icon name="message-square" size={16} color={theme.grays.light} />
              <Text marginLeft={8} color={theme.grays.light} type="captions">
                5.2K
              </Text>
            </Row>
          </Badge>
          <Badge>
            <Row center>
              <Icon name="bookmark" size={16} color={theme.grays.light} />
              <Text marginLeft={8} color={theme.grays.light} type="captions">
                5.2K
              </Text>
            </Row>
          </Badge>
        </Row>
      </Box>
    </Container>
  );
};

export default PostCard;
