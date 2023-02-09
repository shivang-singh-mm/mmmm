import ExpressServer from "./utils/common/expressServer";

const server = new ExpressServer(parseInt(process.env.PORT || '9999', 10));
server.start();