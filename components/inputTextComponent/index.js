import { View, Text, TextInput } from "react-native";
import React from "react";
import { styles } from "./styles";

const InputComponent = (props) => {
  const { placeHolderText, onChangeText, text, containerStyle } = props || {};
  return (
    <View >
      <TextInput
        editable
        style={[styles.textContainer, containerStyle]}
        onChangeText={(text) => onChangeText(text)}
        placeholder={placeHolderText}
        value={text}
      />
    </View>
  );
};

export default InputComponent;
