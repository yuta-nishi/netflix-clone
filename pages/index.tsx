import { NextPage, NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import { Billboard } from '@/components/BillBoard/BillBoard';
import { Navbar } from '@/components/Navbar/Navbar';

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
  return (
    <>
      <Navbar />
      <Billboard />
    </>
  );
};

export default Home;
