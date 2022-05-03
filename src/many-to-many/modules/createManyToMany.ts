import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: "9bd70ccd-2dc1-491c-81e4-74ec7f7f98a6",
      fk_id_module: "97eae916-224b-459b-b898-3df635a5136e"
    }
  })

  console.log(result);
}

main();