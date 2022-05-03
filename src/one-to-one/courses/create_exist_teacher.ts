import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de React Native",
      duration: 400,
      description: "Curso Excelente de React Native",
      teacher: {
        connect: {
          id: "98387f22-f5da-4ee0-9305-7f54e48867c8"
        }
      }
    }
  });

  console.log(result);
}

main()