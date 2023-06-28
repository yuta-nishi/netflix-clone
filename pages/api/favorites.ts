import { NextApiRequest, NextApiResponse } from 'next';

import { prismadb } from '@/libs/prismadb';
import { serverAuth } from '@/libs/serverAuth';

const favorites = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    const { currentUser } = await serverAuth(req, res);

    const favoriteMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: currentUser.favoriteIds,
        },
      },
    });

    return res.status(200).json(favoriteMovies);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};

export default favorites;
