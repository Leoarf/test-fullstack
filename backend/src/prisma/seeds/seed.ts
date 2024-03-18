import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

async function seedDatabase(): Promise<void> {
  try {
    await prisma.user.deleteMany({});
    const usersData: User[] = [
      {
        id: 1,
        name: 'Matheus Cardoso',
        email: 'usuario1@example.com',
        cpf: '12345678900',
        phone: '5599202575',
        status: 'Ativo',
      },
      {
        id: 2,
        name: 'Bruno Lopes',
        email: 'usuario2@example.com',
        cpf: '12345678900',
        phone: '2189202575',
        status: 'Inativo',
      },
      {
        id: 3,
        name: 'Júlia Hoffman',
        email: 'usuario3@example.com',
        cpf: '12345678900',
        phone: '1179202575',
        status: 'Aguardando ativação',
      },
    ];

    for (const userData of usersData) {
      await prisma.user.create({
        data: userData,
      });
    }

    console.log('Banco de dados populado com sucesso.');
  } catch (error) {
    console.error('Erro ao popular o banco de dados:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();
