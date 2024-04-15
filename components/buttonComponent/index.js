import { Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { styles } from './styles';

const ButtonComponent = (props) => {
    const {onPress,title}=props || {};
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent