import { StyleSheet, Text, View } from 'react-native';
import React, {useRef} from 'react';
import Input from '../UIUX/Input';

function HeaderInput() {
  const tagRef = useRef(null)

  const handleChange = () => {
    const ref = tagRef.current.value;
    console.log("header tag input", ref);
  }

  return (
    <View style={style.container}>
      <Input ref={tagRef} handleState={handleChange}/>
    </View>
  )
}

export default HeaderInput

const style = StyleSheet.create({
  container: {

  },

})
