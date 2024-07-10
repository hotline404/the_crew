import { StyleSheet, Text, View, Image } from "react-native"

function Post({items}) {
  return (
    <View>
      {
        items.map((item, index) => {
          <View key={index}>
            <Image source="" />
            <Text>{item.title}</Text>
            <Text>{item.userName}</Text>
            <Text>{item.date}</Text>
          </View>
        })
      }
    </View>
  )
}

export default Post
