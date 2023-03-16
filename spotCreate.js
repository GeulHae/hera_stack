const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const data = [
      {
        SPOT_ID: 1,
        PLACE: '강서',
      },
      {
        SPOT_ID: 2,
        PLACE: '광나루',
      },
      {
        SPOT_ID: 3,
        PLACE: '난지',
      },
      {
        SPOT_ID: 4,
        PLACE: '뚝섬',
      },
      {
        SPOT_ID: 5,
        PLACE: '망원',
      },
      {
        SPOT_ID: 6,
        PLACE: '반포',
      },
      {
        SPOT_ID: 7,
        PLACE: '양화',
      },
      {
        SPOT_ID: 8,
        PLACE: '여의도',
      },
      {
        SPOT_ID: 9,
        PLACE: '이촌',
      },
      {
        SPOT_ID: 10,
        PLACE: '잠실',
      },
      {
        SPOT_ID: 11,
        PLACE: '잠원',
      },
    ];

    const res = await prisma.spot.createMany({
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
