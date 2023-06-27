import { InformationCircleIcon } from '@heroicons/react/24/outline';

import { useBillboard } from '@/hooks/useBillboard';
import { PlayButton } from './PlayButton';

export const Billboard: React.FC = () => {
  const { data } = useBillboard();
  console.log(data);

  return (
    <div className="relative h-[56.25vw]">
      <video
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
        autoPlay
        muted
        loop
        className="h-[56.25vw] w-full object-cover brightness-[60%] transition duration-500 "
      ></video>
      <div className="absolute top-[30%] ml-4 md:top-[40%] md:ml-16">
        <p className="h-full w-[50%] text-xl text-white drop-shadow-xl md:w-[80%] md:text-5xl lg:w-[50%]">
          {data?.title}
        </p>
        <p className="mt-3 w-[90%] text-[8px] text-white drop-shadow-lg md:mt-8 md:w-[80%] md:text-lg lg:w-[50%]">
          {data?.description}
        </p>
        <div className="mt-3 flex flex-row items-center gap-3 md:mt-4">
          <PlayButton movieId={data?.id} />
          <button className="flex w-auto flex-row items-center rounded-md bg-white bg-opacity-30 px-2 py-1 text-xs font-semibold text-white transition hover:bg-opacity-20 md:px-4 md:py-2 lg:text-lg">
            <InformationCircleIcon className="mr-1 w-4 md:w-7" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
