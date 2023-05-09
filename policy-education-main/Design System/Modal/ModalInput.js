import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
} from "react-native";

const ModalInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={styles.text}
        placeholder={props.placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 20,
    // paddingVertical: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 30,
    maxHeight: "100%",
    textAlignVertical: "top",
    padding: 10,
  },
});

export default ModalInput;
