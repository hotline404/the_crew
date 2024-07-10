import { TouchableOpacity, View, StyleSheet, Text } from "react-native"
function Button({ButtonName, onPress}) {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonName}>{ButtonName}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    borderRadius: 8,
    cursor: 'pointer',
    backgroundColor: '#000000',
  },

  buttonName: {
    color: '#fff',
  }
})
