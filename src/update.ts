import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.courses.update({
    data: {
      name: "Curso de React Native 2.0",
      duration: 250
    },
    where: {
      id: "dc1aad70-b34c-43cb-ab23-84e5db9206f2"
    }
  });

  console.log(course);
}

main();