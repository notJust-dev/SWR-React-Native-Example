import { StatusBar } from 'expo-status-bar';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import useSWR from 'swr';

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

  console.log(JSON.stringify(data, null, 2));

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello world</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
