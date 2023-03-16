const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const data = [
      {
        USER_ID: 3,
        NICKNAME: 'MMVIP',
      },
      {
        USER_ID: 4,
        NICKNAME: 'MVIP',
      },
    ];

    const res = await prisma.user.createMany({
      data,
      skipDuplicates: true,
    });

    console.log('Created a user sucessfully', res);
  } catch (err) {
    console.log('Create a user Error:', err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}

main();
