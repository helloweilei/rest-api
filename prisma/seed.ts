import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();
const main = async () => {
  // 当没有满足where条件的数据时插入新的数据
  const article1 = await client.article.upsert({
    where: { title: 'article 1' },
    update: {},
    create: {
      title: 'article 1',
      content: 'This is article 1 content ...',
      published: false,
    },
  });
  // 当没有满足where条件的数据时插入新的数据
  const article2 = await client.article.upsert({
    where: { title: 'article 2' },
    update: {},
    create: {
      title: 'article 2',
      content: 'This is article 2 content ...',
      published: false,
    },
  });
  console.log(article1, article2);
};

main()
  .then(() => {
    client.$disconnect();
  })
  .catch((err) => {
    console.error(err);
    client.$disconnect();
    process.exit(1);
  });
