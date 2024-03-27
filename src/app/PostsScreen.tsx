import { ActivityIndicator, Text, FlatList } from 'react-native';
import PostListItem from '../components/PostListItem';
import { usePosts } from '../hooks/posts';

export default function PostsScreen() {
  const { posts, isLoading, error } = usePosts();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch data. {error.message}</Text>;
  }

  return (
    <FlatList
      data={posts}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      renderItem={({ item }) => <PostListItem post={item} />}
    />
  );
}
