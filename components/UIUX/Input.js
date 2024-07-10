import { StyleSheet, Text, View, TextInput } from 'react-native';

/** input 공통 컴포넌트 */

const Input = ((ref) => {
  return (
    <View style={style.container}>
      <TextInput 
      ref={ref}
      onChange={handleChange} 
      placeholder='태그를 입력하세요'
      style={style.input}
      >

      </TextInput>
    </View>
  )
})

export default Input

const style = StyleSheet.create({
  container: {

  },

  input: {

  }
})
