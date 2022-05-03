import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "Arquitetura Limpa",
      author_id: "6269df8f-02cd-4eae-9f91-3e9c8784bbe1"
    }
  });

  console.log(result)
}

main();