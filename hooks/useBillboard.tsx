import useSWR, { SWRResponse } from 'swr';

import { fetcher } from '@/libs/fetcher';
import { Movie } from '@/types/Movie';

type Data = Movie;

export const useBillboard = () => {
  const { data, error, isLoading }: SWRResponse<Data, Error> = useSWR(
    '/api/random',
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    data,
    error,
    isLoading,
  };
};
