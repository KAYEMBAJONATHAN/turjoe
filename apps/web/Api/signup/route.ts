import { NextApiRequest, NextApiResponse } from 'next';

type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

let users: UserData[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email, password } = req.body;

      if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      users.push({ firstName, lastName, email, password });

      return res.status(201).json({ message: 'User signed up successfully!', user: { email } });
    } catch (error) {
      return res.status(500).json({ message: 'An error occurred while signing up', error });
    }
  } else if (req.method === 'GET') {
    try {
      return res.status(200).json({ message: 'Fetched users successfully', users });
    } catch (error) {
      return res.status(500).json({ message: 'An error occurred while fetching users', error });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
