import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import React, { useEffect } from "react";
import { data1, handleBackground } from "./logic ";
import Icon from "react-native-vector-icons/FontAwesome";
import ButtonComponent from "../../components/buttonComponent";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { groupDataSuccess } from "../../redux/reducers/loginReducer";

const SelectedContacts = (props) => {
  const { route } = props || {};
  const { refRBSheet } = route?.params || {};

  const [data, setData] = React.useState(data1);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleClick = (id) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, check: !item.check };
      }
      return item;
    });

    console.log("Updated Data:", updatedData);
    dispatch(groupDataSuccess(updatedData));
    setData(updatedData);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
      unsubscribe();
      refRBSheet?.current?.open();
      navigation.goBack();
    });
  }, []);

  const renderView = (item, index) => {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 16,
          justifyContent: "space-between",
          marginTop: 16,
          height: 16,
          backgroundColor: handleBackground(item?.id),
        }}
      >
        <TouchableOpacity
          style={{ width: 16, height: 16, borderWidth: 1, borderRadius: 2 }}
          onPress={() => handleClick(item?.id, item?.check)}
        >
          {item?.check && <Icon name="check" color="blue" size={14} />}
        </TouchableOpacity>
        <Text>{item?.name}</Text>
        <Text>{item?.MoNo}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View></View>
      {data?.map((item, index) => renderView(item, index))}
    </SafeAreaView>
  );
};

export default SelectedContacts;
