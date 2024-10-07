import type { NextApiRequest, NextApiResponse } from 'next';
import { sql } from "@vercel/postgres";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      await sql`
        INSERT INTO contact (name, email, message)
        VALUES (${name}, ${email}, ${message})
        ON CONFLICT (email) DO NOTHING;
      `;

      return res.status(200).json({ message: 'Message received' });
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Failed to submit message' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
