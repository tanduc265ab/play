import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: (process.env.KAFKA_BROKERS || "localhost:9092").split(","),
});

export const producer = kafka.producer();
export const consumer = kafka.consumer({ groupId: "test-group" });

export const connectKafka = async () => {
  await producer.connect();
  await consumer.connect();
  console.log("Kafka connected");
};
