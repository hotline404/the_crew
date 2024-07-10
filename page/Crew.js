import { View, Text, StyleSheet, Image } from "react-native"

const Avatar = ({img, name, description}) => {
  return (
    <View>
      <Image source={img} />
      <Text>{name}</Text>
      <Text>{description}</Text>
    </View>
  )
}

function Crew({items}) {
  return (
    <View>
      {
        items.map((item, index) => {
          <View key={index}>
            <Text>{item.title}</Text>
            <Avatar img={item.img} name={item.name} description={item.desc}/>
          </View>
        })
      }
    </View>
  )
}

export default Crew
