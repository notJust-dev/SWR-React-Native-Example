import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Button, AppState } from 'react-native';

import GraphQLPostsScreen from './src/app/GraphQLPostsScreen';
import PostsScreen from './src/app/PostsScreen';
import { SWRConfig } from 'swr';

import { SWRConfiguration } from './src/utils/SWRConfiguration';

export default function App() {
  return (
    <SWRConfig value={SWRConfiguration}>
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
