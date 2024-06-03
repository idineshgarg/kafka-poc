const { kafka } = require("./src/kafka");

console.log(kafka);
const producer = kafka.producer();

async function init() {
  await producer.connect();
  await producer.send({
    topic: "test",
    messages: [{ value: "Hello KafkaJS user!" }],
  });

  await producer.disconnect();
}
init();
