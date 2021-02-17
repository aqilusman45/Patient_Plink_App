import React from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
} from "native-base";
import { StackScreenProps } from "@react-navigation/stack";
import { Pressable } from "react-native";

export const DocSearch: React.FC<StackScreenProps<{}>> = ({
  navigation: { navigate },
}) => {
  return (
    <Container>
      <Content>
        <List>
          <ListItem itemDivider>
            <Text>Neurosurgeons</Text>
          </ListItem>
          <Pressable
            onPress={() => {
              navigate("Schedule" as any);
            }}
          >
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/69.jpg",
                  }}
                />
              </Left>
              <Body>
                <Text>Dr. Farrukh Javeed</Text>
                <Text note>Neuro Surgeon, Pediatric Neuro Surgeon</Text>
              </Body>
              <Right>
                <Text note>Mon 14:00 - 17:00</Text>
              </Right>
            </ListItem>
          </Pressable>
          <ListItem itemDivider>
            <Text>Cardiologist</Text>
          </ListItem>
          <Pressable
            onPress={() => {              
              navigate("Schedule" as any);
            }}
          >
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/66.jpg",
                  }}
                />
              </Left>
              <Body>
                <Text>Dr. Aurangzeb Abbasi</Text>
                <Text note>Neuro Surgeon MBBS, FCPS</Text>
              </Body>
              <Right>
                <Text note>Tue 14:00 - 17:00</Text>
              </Right>
            </ListItem>
          </Pressable>
        </List>
      </Content>
    </Container>
  );
};

export default DocSearch;
