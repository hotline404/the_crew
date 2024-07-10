import { StyleSheet, Text, View,  } from 'react-native';
import Toggle from '../UIUX/Toggle';
import Button from '../UIUX/Button';

function HeaderTop() {
  
  const handleToggle = (state) => {
    console.log(state)
  };

  const handlePress = (type) => {
    switch (type) {
      case "pageChange":
        console.log("pageChange");
      break;

      case "userType":
        console.log("userType");
      break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
      <Button ButtonName='Crew' style={styles.styledButton} onPress={() => handlePress("pageChange")}>Crew</Button>
      </View>
      <View style={styles.centerContainer}>
      <Text style={styles.userInfo} onPress={() => handlePress("userType")}>#Unknown</Text>
      </View>
      <View>
      <Toggle label="" handleState={handleToggle}/>
      </View>
    </View>
  )
};

export default HeaderTop

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#d6d6d6',
    justifyContent: 'space-between',
  },

  userInfo: {
    fontSize: 30,
    textAlign: 'center', 
    textAlignVertical: 'center',
  },

  styledButton: {
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#000'
  },

  buttonContainer: {
    paddingLeft: 12
  }
})
