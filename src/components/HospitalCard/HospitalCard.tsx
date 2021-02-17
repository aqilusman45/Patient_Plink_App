import React from 'react';
import {Image, Pressable} from 'react-native';
import {Card, CardItem, Thumbnail, Text, Left, Body} from 'native-base';

export interface HospitalCardProps {
  navigate: (name: string) => void;
}

export const HospitalCard: React.FC<HospitalCardProps> = ({navigate}) => {
  return (
    <Pressable
      onPress={() => {
        navigate('DoctorSearch');
      }}>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri:
                  'https://www.aku.edu/news/PublishingImages/Top-Image-PR-Impact%20study.jpg',
              }}
            />
            <Body>
              <Text>Aga Khan Hospital</Text>
              <Text note>Stadium Rd.</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                'https://www.aku.edu/news/PublishingImages/Top-Image-PR-Impact%20study.jpg',
            }}
            style={{height: 200, width: undefined, flex: 1}}
          />
        </CardItem>
      </Card>
    </Pressable>
  );
};

export default HospitalCard;
