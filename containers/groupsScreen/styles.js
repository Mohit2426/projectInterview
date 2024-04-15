import { Dimensions, StyleSheet }  from "react-native";
const windowWidth = Dimensions.get('window').width
export const styles=StyleSheet.create({
    mainContainer:{
        alignItems:'center',
    },
    textStyles:{
        fontSize:24,
    },
    subContainer:{backgroundColor:'grey',width:windowWidth,alignItems:'center'},
    textContainer:{
        height: 40,
        margin: 4,
        borderWidth: 1,
        padding: 10,
        borderRadius:8,
    },
})