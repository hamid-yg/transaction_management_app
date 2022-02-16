const fastify = require("fastify");
require("dotenv").config();

const port = process.env.PORT || 5000;
const server = fastify({
    logger: true
});


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