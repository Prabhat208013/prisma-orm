import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
 await prisma.employee.create({
    data:{
        firstname:"krishna",
        lastname: "yaduvanshi",
        age:32,
        designation:"caretaker"
    }
})
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
