import { View, Text, StyleSheet } from 'react-native';
import { useUser } from '../hooks/users';

const PostListItem = ({ post }) => {
  const { user, isLoading, error } = useUser(post.userId);

  return (
    <View style={styles.container}>
      <Text>{user?.name}</Text>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    gap: 10,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  body: {
    color: 'gray',
  },
});

export default PostListItem;
