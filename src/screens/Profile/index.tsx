import {Box} from '@/components/Box';
import {Row} from '@/components/Row';
import {Text} from '@/components/Text';
import {theme} from '@/config/theme';
import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  Container,
  ProfileImage,
  ProfileImageBorder,
  UserDataContainer,
} from './styles';

const slideList = Array.from({length: 5}).map((_, i) => {
  return {
    id: i,
    image: `https://picsum.photos/1440/2842?random=${i}`,
  };
});

const Profile: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <Container style={{paddingTop: insets.top}}>
      <UserDataContainer>
        <ProfileImageBorder>
          <ProfileImage
            resizeMode="center"
            source={{uri: slideList[0].image}}
          />
        </ProfileImageBorder>

        <Text marginTop={16} type="H2" color={theme.grays.dark}>
          John Doe
        </Text>
        <Text type="bodyCopy" color={theme.grays.gray_dark}>
          @johndoe
        </Text>
      </UserDataContainer>
      <Box paddingLeft={40} paddingRight={40} marginTop={70}>
        <Row spaceBetween>
          <Box>
            <Text color={theme.grays.grey} type="bodyCopy">
              Posts
            </Text>
            <Text align="center" type="H2">
              35
            </Text>
          </Box>
          <Box>
            <Text color={theme.grays.grey} type="bodyCopy">
              Followers
            </Text>
            <Text align="center" type="H2">
              1,552
            </Text>
          </Box>
          <Box>
            <Text color={theme.grays.grey} type="bodyCopy">
              Follows
            </Text>
            <Text align="center" type="H2">
              128
            </Text>
          </Box>
        </Row>
      </Box>
    </Container>
  );
};

export default Profile;
