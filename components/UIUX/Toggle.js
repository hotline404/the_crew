import { StyleSheet, Switch, Text, View } from "react-native"
import React, {useState} from "react"

function Toggle({label, handleState}) {
  const [isEnabled, setIsEabled] = useState(false);

  const toggleSwitch = () => {
    setIsEabled(!isEnabled);
    handleState(isEnabled);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        trackColor={{ false: 'gray', true: 'tomato' }}
        thumbColor={isEnabled ? 'white' : 'gray'}
        ios_backgroundColor="gray"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
      
    </View>
  )
}

export default Toggle


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    cursor: 'pointer',
    fontSize: 14,
  },
  label: {
    fontSize: 14,
  },
  switch: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
  },
});