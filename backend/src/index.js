const fastify = require("fastify");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 5000;
const server = fastify({
    logger: true
});

mongoose.connect(process.env.MONGO_DB_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err))

const runServer = async () => {
    try {
        await server.listen(port);
        console.log('Server started successfully at', port);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

runServer();