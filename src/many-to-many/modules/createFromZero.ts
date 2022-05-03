import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      courses: {
        create: {
          name: "Curso de NodeJS",
          duration: 200,
          description: "Curso completo de NodeJS"
        }
      },
      modules: {
        create: {
          name: "PrismaIO",
          description: "Curso completo de PrismaIO"
        }
      }
    }
  })

  console.log(result);
}

main();