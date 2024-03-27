import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Button } from 'react-native';
import PostsScreen from './src/app/PostsScreen';
import { SWRConfig } from 'swr';
import { fetcher } from './src/utils/fetcher';

export default function App() {
  return (
    <SWRConfig value={{ fetcher, dedupingInterval: 2000 }}>
      <SafeAreaView style={styles.container}>
        <PostsScreen />

        <StatusBar style="auto" />
      </SafeAreaView>
    </SWRConfig>
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
