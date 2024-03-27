import { StatusBar } from 'expo-status-bar';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';
import useSWR from 'swr';
import PostListItem from './src/components/PostListItem';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App() {
  const { data, isLoading, error } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Failed to fetch data. {error.message}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        renderItem={({ item }) => <PostListItem post={item} />}
      />

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
