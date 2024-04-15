import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    marginVertical: 16,
    width:"80%",
    paddingVertical: 24,
    paddingHorizontal:16,
    borderWidth:0.2,
    borderRadius:8,
 
  },
  mainText:{
    textAlign:'center',
    fontSize:16,
    fontFamily:'fontBold',
  },
  subContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  groupStyle:{textAlign:'center',marginBottom:8,   fontSize:16,fontWeight:'bold'},
});
