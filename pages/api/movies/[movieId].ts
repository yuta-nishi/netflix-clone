import { NextApiRequest, NextApiResponse } from 'next';

import { prismadb } from '@/libs/prismadb';
import { serverAuth } from '@/libs/serverAuth';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    await serverAuth(req, res);

    const { movieId } = req.query;

    if (typeof movieId !== 'string') {
      throw new Error('Invalid ID');
    }

    if (!movieId) {
      throw new Error('Missing ID');
    }

    const movies = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    return res.status(200).json(movies);
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
};

export default handler;
