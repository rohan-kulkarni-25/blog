import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
const ShowScreen = ({ route, navigation }) => {
  const { data } = route.params;
  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === data);
  console.log(blogPost);
  return (
    <View>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardtitle}>{blogPost.title}</Title>
          <Paragraph style={styles.cardcontent}>{blogPost.content}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor: "#000",
  },
  cardtitle: {
    color: "white",
    fontSize: 25,
  },
  cardcontent: {
    color: "white",
    paddingVertical: 10,
    marginVertical: 20,
  },
});
