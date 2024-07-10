import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Headers from './components/common/Headers';
import { PAGE_ARR } from './page/rootComp';

export default function App() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <StatusBar />
        <Headers />
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {
            Array.from({ length: 30 }, (_, index) => (
              <View key={index} style={styles.item}>
                <Text>아이템</Text>
              </View>
            ))
          }
        </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Headers: {
    flex: 1,
    backgroundColor: '#FBFAFA',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3.
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.64,
    elevation: 5,
    
  },

  scrollViewContent: {
    padding: 163
  },
  item: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
