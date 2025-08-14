import { prisma } from '../../lib/prisma';



export async function createUser(email: string, name: string) {
  const user = await prisma.user.create({
    data: {
      email,
      name
    }
  });
  return user;
}

export async function getUser(email: string, name: string) {
  const user = await prisma.user.findUnique({
    where: { email, name }
  });
  return user;
}
