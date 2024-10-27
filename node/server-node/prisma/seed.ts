import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
   data: {
    id:'381160c4-da01-4746-ac97-2502a4a6d8fc',
    title: 'Unite Summit',
    slug: 'unite-sumit',
    details: 'Um evento para devs apaixonados por código',
    maximumAttendees: 120,
   }
  })
}

seed().then(()=> {
  console.log('Database seed!');
  prisma.$disconnect()
})