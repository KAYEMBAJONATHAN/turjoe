
import { Post } from '@prisma/client';
import prisma from './lib/prisma'; 


export async function GetPosts(): Promise<Post[]> {
   return prisma.post.findMany();
  };
  