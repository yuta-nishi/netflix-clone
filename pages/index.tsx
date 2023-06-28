import { NextPage, NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import { Billboard } from '@/components/BillBoard/BillBoard';
import { MovieList } from '@/components/Movie/MovieList';
import { Navbar } from '@/components/Navbar/Navbar';
import { useFavorites } from '@/hooks/useFavorites';
import { useInfoModalStore } from '@/hooks/useInfoModalStore';
import { useMovieList } from '@/hooks/useMovieList';

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const Home: NextPage = () => {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModalStore();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  );
};

export default Home;
