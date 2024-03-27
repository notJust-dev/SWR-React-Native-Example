import { View, Text, StyleSheet } from 'react-native';

const PostListItem = ({ post }) => {
  return (
    <View style={styles.container}>
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
