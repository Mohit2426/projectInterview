import { View, Text, TextInput, SafeAreaView, Button } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../../components/buttonComponent";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../redux/reducers/loginReducer";
import InputComponent from "../../components/inputTextComponent";

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const navigateToGroupScreen = () => {
    navigation?.navigate("GroupScreen");
    dispatch(loginSuccess(text));
  };
  const placeHolderText = "Name";
  const { name } = useSelector((state) => state.loginReducer) || {};
  const [text, onChangeText] = useState(name);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.logInStyles}>Log In To Your Account</Text>
        <InputComponent
          placeHolderText={placeHolderText}
          onChangeText={onChangeText}
          text={text}
          containerStyle={styles.textContainer}
        />
        <ButtonComponent title={"Log in"} onPress={navigateToGroupScreen} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
