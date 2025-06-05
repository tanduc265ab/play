import { initializeDatabase } from "./data-source";
import { connectKafka, consumer, producer } from "./kafka";
import { User } from "./entity/User";
import { AppDataSource } from "./data-source";

const start = async () => {
  await initializeDatabase();
  await connectKafka();

  consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`received message: ${message.value?.toString()}`);
    },
  });

  const userRepo = AppDataSource.getRepository(User);
  const user = userRepo.create({ name: "Alice" });
  await userRepo.save(user);
  await producer.send({
    topic: "users",
    messages: [{ value: `User created: ${user.name}` }],
  });
};

start().catch((err) => {
  console.error(err);
});
