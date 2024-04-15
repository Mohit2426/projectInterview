import { View, Text, SafeAreaView, Button, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import { styles } from "./styles";
import RBSheet from "react-native-raw-bottom-sheet";
import ButtonComponent from "../../components/buttonComponent";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { dataSet, groupDataSuccess } from "../../redux/reducers/loginReducer";
import InputComponent from "../../components/inputTextComponent";
import GroupsComponent from "../../components/groupsComponent";

const GroupsScreen = () => {
  const refRBSheet = useRef();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [text, onChangeText] = useState("");
  const placeHolderText = "Name";
  const { groupData,dataforRender } = useSelector((state) => state?.loginReducer) || {};
  console.log("🚀 ~ GroupsScreen ~ dataforRender:", dataforRender);


  const [data, setData] = useState(groupData);
  console.log("🚀 ~ GroupsScreen ~ data:", data);

  const handleData = () => {
    const updatedData = data?.map((item) => {
      return { ...item, group: text };
    });
    setData(updatedData);
    dispatch(dataSet(updatedData));
  };

  const renderView = (item, index) => {
    return <GroupsComponent item={item} key={index} />;
  };

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        {dataforRender?.map((item, index) => renderView(item, index))}
        <Button
          title="Create Group"
          onPress={() => refRBSheet.current.open()}
        />
      </SafeAreaView>
      <RBSheet
        ref={refRBSheet}
        customModalProps={{
          animationType: "slide",
          statusBarTranslucent: true,
        }}
        height={200}
        customAvoidingViewProps={{
          enabled: false,
        }}
      >
        <View style={{ flex: 1, marginHorizontal: 16, marginTop: 14 }}>
          <Text>Group Name</Text>
          <InputComponent
            placeHolderText={placeHolderText}
            onChangeText={onChangeText}
            text={text}
            containerStyle={styles.textContainer}
          />
          <ButtonComponent
            title={"Selected Contacts"}
            onPress={() => {
              navigation?.navigate("Selected Contact", { refRBSheet });
            }}
          />
          <ButtonComponent title={"Create"} onPress={handleData} />
        </View>
      </RBSheet>
    </>
  );
};

export default GroupsScreen;
