import { StyleSheet } from "react-native";
import React, { useState, useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      initialValues={{ title: "", content: "" }}
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    />
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
