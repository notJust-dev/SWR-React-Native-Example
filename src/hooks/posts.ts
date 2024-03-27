import useSWR from 'swr';

export function usePosts() {
  const { data, isLoading, error } = useSWR(
    'https://jsonplaceholder.typicode.com/posts'
  );

  return {
    posts: data,
    isLoading,
    error,
  };
}
