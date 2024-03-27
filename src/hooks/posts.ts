import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

export function usePosts() {
  const { data, isLoading, error, mutate } = useSWR(
    'https://jsonplaceholder.typicode.com/posts'
  );

  return {
    posts: data,
    isLoading,
    error,
    mutate,
  };
}

// Creating a post
type NewPost = {
  title: string;
  body: string;
  userId: number;
};

const createPost = async (url, newPost: NewPost) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return response.json();
};

export const useCreatePost = () => {
  const { trigger, data, isMutating, error } = useSWRMutation(
    'https://jsonplaceholder.typicode.com/posts',
    createPost
  );

  return {
    trigger,
    newPost: data,
    isMutating,
    error,
  };
};
