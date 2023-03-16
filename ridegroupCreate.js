const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const data = [
      {
        GROUP_ID: 1,
        SPOT_ID: 1,
        USER_ID: 3,
        TITLE: '누가누가 이기나',
        INFO: '준비 요이땅 어차피 답정나, 데이터를 보여주렴',
        STATUS: 'OPEN',
        START_TIME: new Date(),
        END_TIME: new Date(),
      },
      {
        GROUP_ID: 2,
        SPOT_ID: 2,
        USER_ID: 4,
        TITLE: '준비 요이땅!~ 요기요기붙어라👍🏻',
        INFO: '이제는 달릴 일만 남았구나!!~',
        STATUS: 'OPEN',
        START_TIME: new Date(),
        END_TIME: new Date(),
      },
    ];

    const res = await prisma.ridegroup.createMany({
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
















