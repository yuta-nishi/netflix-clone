import useSWR, { SWRResponse } from 'swr';

import { fetcher } from '@/libs/fetcher';
import { User } from '@/types/User';

type Data = User;

export const useCurrentUser = () => {
  const { data, error, isLoading, mutate }: SWRResponse<Data, Error> = useSWR(
    '/api/current',
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};
