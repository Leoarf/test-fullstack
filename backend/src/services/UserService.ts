import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export class UserService {
  async getAllUsers(): Promise<User[]> {
    return prisma.user.findMany();
  }

  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    return prisma.user.create({ data: userData });
  }

  async updateUser(
    id: string,
    userData: Omit<User, 'id'>
  ): Promise<User | null> {
    const numericId = parseInt(id, 10);
    return prisma.user.update({ where: { id: numericId }, data: userData });
  }
}
