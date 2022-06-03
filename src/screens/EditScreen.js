import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ route, navigation }) => {
  const { data } = route.params;
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === data);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(blogPost.id, title, content, () =>
          navigation.navigate("Show", { data: blogPost.id })
        );
      }}
    />
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
