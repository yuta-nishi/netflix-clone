import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { useMovie } from '@/hooks/useMovie';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Watch: NextPage = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed z-10 flex w-full flex-row items-center gap-8 bg-black bg-opacity-70 p-4">
        <ArrowLeftIcon
          onClick={() => router.push('/')}
          className="w-4 cursor-pointer text-white transition hover:opacity-80 md:w-10"
        />
        <p className="text-xl font-bold text-white md:text-3xl">
          <span className="font-light">Watching:</span> {data?.title}
        </p>
      </nav>
      <video src={data?.videoUrl} autoPlay controls className="h-full w-full"></video>
    </div>
  );
};

export default Watch;
