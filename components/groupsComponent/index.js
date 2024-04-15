import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

const GroupsComponent = (props) => {
    const {item}= props ||{}
    console.log("🚀 ~ GroupsComponent ~ item:", item)
  return (

    <View style={styles.mainContainer}>
          <Text style={styles.groupStyle}>{item?.group}</Text>
         <View style={styles.subContainer}>
      <Text style={styles.mainText}>{item?.name}</Text>
      <Text style={styles.mainText}>{item?.MoNo}</Text>
      </View>
    </View>
  )
}

export default GroupsComponent