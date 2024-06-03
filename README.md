# KAFKA

Basic implementation of kafka in nodejs using kafkajs

## DEVOPS

### INSTALL KAFKA

`brew install kafka`

### START ZOOKEEPER

`zookeeper-server-start /usr/local/etc/kafka/zookeeper.properties`

### START KAFKA SERVER

`kafka-server-start /usr/local/etc/kafka/server.properties`

### CREATE A TOPIC

`kafka-topics --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test`

## Backend

### install kafkajs

`npm install kafkajs`

## Workflow

Create a producer and subscribe a consmer.

## References

[Kafka](https://kafka.apache.org/)

[Medium article](https://medium.com/@Ankitthakur/apache-kafka-installation-on-mac-using-homebrew-a367cdefd273)

[Crash course](https://youtu.be/ZJJHm_bd9Zo?si=ihR5gxuQuS1H-0Gf)

[Kafkajs](https://kafka.js.org/)
