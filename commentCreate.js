const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const data = [
      {
        GROUP_ID: 1,
        SPOT_ID: 1,
        USER_ID: 4,
        CONTENT: '🎉🎉🎉🎉👏🏻👏🏻👏🏻👏🏻축하축하👏🏻👏🏻👏🏻👏🏻🎉🎉🎉🎉',
      },
      {
        GROUP_ID: 1,
        SPOT_ID: 1,
        USER_ID: 3,
        CONTENT: '🎉대박 나세요!! 11팀 또 한번 1등 가자!!~',
      },
    ];

    const res = await prisma.comment.createMany({
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

