import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

async function  fillDb() {
  await prisma.shopItem.upsert({
    where: {id: 1},
    update: {},
    create: {
      name: 'Epiphone Songmaker DR-100',
      description: 'Things have certainly changed around here. I remember when this was all farmland as far the eye could see. Old man Peabody owned all of this. He had this crazy idea about breeding pine trees.',
      photo: 'photo1.jpg',
      type: 'Electric',
      code: 'code-1',
      stringsNumber: 6,
      price: 100,
    }
  })
  await prisma.shopItem.upsert({
    where: {id: 2},
    update: {},
    create: {
      name: 'Fender California Newporter Player Acoustic',
      description: 'Things have certainly changed around here. I remember when this was all farmland as far the eye could see. Old man Peabody owned all of this. He had this crazy idea about breeding pine trees.',
      photo: 'photo2.jpg',
      type: 'Acoustic',
      code: 'code-2',
      stringsNumber: 7,
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

