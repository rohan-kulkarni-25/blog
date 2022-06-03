import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View>
      <TextInput
        label="Title"
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        label="Content"
        style={styles.input}
        value={content}
        onChangeText={(content) => {
          setContent(content);
        }}
      />

      <Button
        style={styles.btn}
        icon="file"
        mode="contained"
        onPress={() => onSubmit(title, content)}
      >
        SAVE POST
      </Button>
    </View>
  );
};

export default BlogPostForm;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginHorizontal: 15,
    margin: 20,
  },
  input: {
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  btn: {
    margin: 10,
    backgroundColor: "#000",
  },
});
