import { NextApiRequest, NextApiResponse } from 'next';

export default function Pos(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    
    return res.status(200).json({ message: 'Logged in successfully!' });
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
