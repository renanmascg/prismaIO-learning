import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 190,
      name: "Curso de Elixir",
      description: "Curso excelente de Elixir"
    }
  });

  console.log(result)
}

main();