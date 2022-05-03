import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findMany({
    where: {
      id: "9bd70ccd-2dc1-491c-81e4-74ec7f7f98a6"
    },
    include: {
      CoursesModules: true
    }
  })

  console.log(JSON.stringify(result));
}

main();