import React from 'react';
import {Container, Header, Content, Form, Item, Input} from 'native-base';
import {HospitalCard} from '../HospitalCard';
import {StackScreenProps} from '@react-navigation/stack';

export const HospitalSearch: React.FC<StackScreenProps<{}>> = ({
  navigation: {navigate},
}) => {
  return (
    <Container>
      <Header
        style={{
          height: 5,
        }}
      />
      <Item
        style={{
          marginRight: 10,
          marginLeft: 10,
        }}>
        <Input placeholder="Search Hospital" />
      </Item>
      <Content>
        {[1, 2, 3].map((node) => (
          <HospitalCard navigate={navigate} key={node} />
        ))}
      </Content>
    </Container>
  );
};

export default HospitalSearch;
