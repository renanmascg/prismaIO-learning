import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      description: "Aprendendo Firebase do zero",
      name: "Aprendendo Firebase",
      CoursesModules: {
        create: {
          courses: {
            connect: {
              id: "9bd70ccd-2dc1-491c-81e4-74ec7f7f98a6"
            }
          }
        }
      }
    }
  })

  console.log(result);
}

main();