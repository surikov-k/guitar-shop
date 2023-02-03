import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient()

async function  fillDb() {
  await prisma.guitar.upsert({
    where: {id: 2},
    update: {},
    create: {
      name: 'Crystal fears gains most trusts',
      description: 'Things have certainly changed around here. I remember when this was all farmland as far the eye could see. Old man Peabody owned all of this. He had this crazy idea about breeding pine trees.',
      photo: 'photo2.jpg',
      type: 'Acoustic',
      code: 'code-2',
      stringsNumber: 7,
      rating: 4.5,
      price: 200,
    }
  })
}

fillDb()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });

