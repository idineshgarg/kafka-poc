const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my_unique_id",
  brokers: ["192.168.1.20:9092"],
});

module.exports = {
  kafka,
};
