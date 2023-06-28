import { isEmpty } from 'lodash';

import { Movie } from '@/types/Movie';
import { MovieCard } from './MovieCard';

interface Props {
  title: string;
  data: Movie[];
}

export const MovieList: React.FC<Props> = ({ title, data }) => {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="mt-4 space-y-8 px-4 md:px-12">
      <div>
        <p className="mb-4 text-base font-semibold text-white md:text-xl lg:text-2xl">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
