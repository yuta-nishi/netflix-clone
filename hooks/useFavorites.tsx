import useSWR from 'swr';

import { fetcher } from '@/libs/fetcher';

export const useFavorites = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/favorites', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};
