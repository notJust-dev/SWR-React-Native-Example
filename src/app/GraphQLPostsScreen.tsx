import { ActivityIndicator, Text, FlatList, Button, Alert } from 'react-native';
import PostListItem from '../components/PostListItem';
import { useGqlPosts, usePosts } from '../hooks/posts';

export default function GraphQLPostsScreen() {
  const { posts, isLoading, error } = useGqlPosts();

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
