import { NextPage, NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useCallback } from 'react';

interface Props {
  name: string;
}

const images = [
  '/images/default-blue.png',
  '/images/default-red.png',
  '/images/default-slate.png',
  '/images/default-green.png',
];

export const getServerSideProps = async (context: NextPageContext) => {
  const session = getSession(context);

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

const UserCard: React.FC<Props> = ({ name }) => {
  const imgSrc = images[Math.floor(Math.random() * 4)];

  return (
    <div className="group mx-auto w-44 flex-row">
      <div className="flex h-44 w-44 items-center justify-center overflow-hidden rounded-md border-2 border-transparent group-hover:cursor-pointer group-hover:border-white ">
        <img
          src={imgSrc}
          alt=""
          draggable={false}
          className="h-max w-max object-contain"
        />
      </div>
      <div className="mt-4 text-center text-2xl text-gray-400 group-hover:text-white">
        {name}
      </div>
    </div>
  );
};

const Profiles: NextPage = () => {
  const router = useRouter();
  const { data: currentUser } = useCurrentUser();

  const selectProfile = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-center text-3xl text-white md:text-6xl">Who is watching?</h1>
        <div className="mt-10 flex items-center justify-center gap-8">
          <div onClick={() => selectProfile()}>
            <UserCard name={currentUser?.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
