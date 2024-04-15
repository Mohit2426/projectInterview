import { Dimensions } from "react-native";

export const data1 = [
  {
    id: 1,
    name: "Mohit",
    MoNo: "93849384938493",
    check: false,
  },
  {
    id: 2,
    name: "Jaimit",
    MoNo: "93849384938493",
    check: false,
  },
  {
    id: 3,
    name: "Mohit212",
    MoNo: "93849384938493",
    check: false,
  },
  {
    id: 4,
    name: "Mohit22",
    MoNo: "93849384938493",
    check: false,
  },
  {
    id: 5,
    name: "Mohit1212",
    MoNo: "93849384938493",
    check: false,
  },
];
export const handleBackground = (key) => {
  if (key % 2 === 0) {
    return "white";
  } else return "grey";
};
export const getDeviceWidth = () => {
  return Dimensions.get("window").width;
};
export const getDeviceHeight = () => {
    return Dimensions.get("window").height;
  };
