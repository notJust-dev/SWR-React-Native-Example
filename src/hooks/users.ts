import { fetcher } from '../utils/fetcher';
import useSWR from 'swr';

export function useUser(id: number) {
  const { data, isLoading, error } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    fetcher
  );

  return {
    user: data,
    isLoading,
    error,
  };
}
