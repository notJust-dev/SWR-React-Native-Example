import useSWR from 'swr';

export function useUser(id: number) {
  const { data, isLoading, error } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  return {
    user: data,
    isLoading,
    error,
  };
}
