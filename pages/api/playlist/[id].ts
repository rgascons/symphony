import type { NextApiRequest, NextApiResponse } from 'next';

export default function playlistHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id, },
    method,
  } = req;

  switch (method) {
  case 'GET':
    // Get data from your database
    res.status(200).json({ id, songs: ['song.mp3', 'freedom.wav', 'outoftime.wav'] });
    break;
  default:
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}