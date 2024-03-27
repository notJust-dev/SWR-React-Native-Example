import { ActivityIndicator, Text, FlatList, Button, Alert } from 'react-native';
import PostListItem from '../components/PostListItem';
import { useCreatePost, usePosts } from '../hooks/posts';
import { useSWRConfig } from 'swr';

export default function PostsScreen() {
  const { posts, isLoading, error, mutate } = usePosts();
  const { trigger, newPost } = useCreatePost();

  // const { mutate } = useSWRConfig();

  const runMutation = () => {
    mutate();
  };

  const onCreatePost = async () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 2,
    };

    try {
      await trigger(newPost, {
        optimisticData: (current) => {
          return [newPost, ...current];
        },
        revalidate: false,
        rollbackOnError: (error) => {
          // return false if you don't want to rollback the optimistic updates when the request failed
          return true;
        },
      });
    } catch (e) {
      Alert.alert('Failed to create the post');
    }
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch data. {error.message}</Text>;
  }

  return (
    <>
      <Button title="Refresh" onPress={runMutation} />
      <Button title="Create post" onPress={onCreatePost} />

      <FlatList
        data={posts}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        renderItem={({ item }) => <PostListItem post={item} />}
      />
    </>
  );
}
