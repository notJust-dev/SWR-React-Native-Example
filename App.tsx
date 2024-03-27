import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import PostsScreen from './src/app/PostsScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PostsScreen />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
