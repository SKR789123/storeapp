import { View, Text, TextInput, StyleSheet } from 'react-native'
import React,{useState} from 'react'

const AppTextInput = ({type,secured}) => {
    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState(null);
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={type}
        secureTextEntry={secured}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      marginHorizontal: 20,
      marginBottom:20,
      borderWidth: 1,
      borderColor:'gray',
      padding: 10,
    },
  });

export default AppTextInput