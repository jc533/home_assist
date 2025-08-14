import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "test@test.com" },
    update: {},
    create: {
      email: "test@test.com",
      name: "test"
    }
  })
  console.log("User created or updated:", user)

  // const room = await prisma.room.upsert({
  //   where: { name: "hi" },
  //   update: {},
  //   create: {
  //     name: "hi"
  //   }
  // })
  // console.log("room created or updated:", room)
  //
  // const room = await prisma.cabinet.upsert({
  //   where: { name: "hi" },
  //   update: {},
  //   create: {
  //     name: "hi"
  //   }
  // })
  // const room = await prisma.room.upsert({
  //   where: { name: "hi" },
  //   update: {},
  //   create: {
  //     name: "hi"
  //   }
  // })
  // const room = await prisma.room.upsert({
  //   where: { name: "hi" },
  //   update: {},
  //   create: {
  //     name: "hi"
  //   }
  // })
}
main()
  .then(() => prisma.$disconnect())
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
