import { prisma } from "@/prisma";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Phillip Pine",
        email: "ultramax@hotmail.com",
      },
      {
        name: "Denner Iriney",
        email: "ultlas@hotmail.com",
      },
      {
        name: "Carbrow",
        email: "browdelekin@hotmail.com",
      },
      {
        name: "William Pork",
        email: "pushthedinner@gmail.com",
      },
      {
        name: "Phill 100%",
        email: "tenebra@videotron.ca",
      },
      {
        name: "Peter Diglett",
        email: "picklett@outlook.com",
      },
      {
        name: "Little Lek",
        email: "drowning@yahoo.com",
      },
    ],
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
