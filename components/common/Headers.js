import { StyleSheet, Text, View } from 'react-native';
import HeaderTop from './HeaderTop';
import HeaderInput from './HeaderInput';

const Headers = () => {
  return (
    <View style={styles.container}>
        <HeaderTop />
        <Text>
          <HeaderInput />
        </Text>
        <Text>
          bottom(tag)
        </Text>
    </View>
  )
}

export default Headers;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: "100%",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
  },
})