import { fetcher } from '../utils/fetcher';
import useSWR from 'swr';

export function usePosts() {
  const { data, isLoading, error } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  return {
    posts: data,
    isLoading,
    error,
  };
}
