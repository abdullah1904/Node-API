const PORT = 8080;
// const connectionString = "mongodb://localhost:27017/NodeAPI";
const connectionString = "mongodb://root:abdullah1904@ac-dw1v5p1-shard-00-00.xzbzrr6.mongodb.net:27017,ac-dw1v5p1-shard-00-01.xzbzrr6.mongodb.net:27017,ac-dw1v5p1-shard-00-02.xzbzrr6.mongodb.net:27017/NodeAPI?ssl=true&replicaSet=atlas-e8vsxo-shard-0&authSource=admin&retryWrites=true&w=majority&appName=BackendDB&";
const RedisPassword = 'byLFqw5PLCOWI0E1Hc5UjTWxAN3ouu7q';
const RedisHost = 'redis-18729.c262.us-east-1-3.ec2.cloud.redislabs.com';
const RedisPort = 18729;


export  {PORT, connectionString, RedisPassword, RedisHost,RedisPort};