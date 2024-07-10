import { StyleSheet, Text, View } from 'react-native';


function Tag({ tagNames }) {
  const handlePress = (index) => {
    console.log(index)
  }

  return (
    <View style={styles.container}>
      {
        tagNames.map((tagName, index) => {
          return (
            <Text key={index} onPress={() => handlePress(index)} style={styles.tagName}>{tagName}</Text>
          )
        })
      }
    </View>
  )
}

export default Tag

const styles = StyleSheet.create({
  container: {

  },

  tagName: {

  }
})
