import { PlayIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

interface Props {
  movieId?: string;
}

export const PlayButton: React.FC<Props> = ({ movieId }) => {
  const router = useRouter();

  if (!movieId) {
    return null;
  }

  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="flex w-auto flex-row items-center rounded-md bg-white px-2 py-1 text-xs font-semibold transition hover:bg-neutral-300 md:px-4 md:py-2 lg:text-lg"
    >
      <PlayIcon className="mr-1 w-4 text-black md:w-7" />
      Play
    </button>
  );
};
