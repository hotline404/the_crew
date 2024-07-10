import { StyleSheet, Text, View } from 'react-native';
import Tag from '../UIUX/Tag';

const tageNameDM = [
  "bicycle",
  "한국",
  "경북",
  "오토바이"
]

function HeaderTag() {
  return (
    <View style={styles.container}>
      <Tag tagNames={tageNameDM}/>
    </View>
  )
}

export default HeaderTag

const styles = StyleSheet.create({
  container: {

  }
})
