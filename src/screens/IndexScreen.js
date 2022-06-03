import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { Context } from "../context/BlogContext";
import { Button } from "react-native";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  console.log(state);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(item) => {
          item.id;
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Show", { data: item.id })}
              >
                <Text style={styles.rowtext}>{item.title}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather name="trash" size={30} color={"white"} />
              </TouchableOpacity>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
  ` `;
};

export default IndexScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 10,

    borderTopWidth: 1,
    marginVertical: 10,
    backgroundColor: "#000",
  },
  rowtext: {
    color: "white",
    fontSize: 12,
    letterSpacing: 2,
  },
});
