import express from "express";
import router from "./routes.js"

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();

        const dbinfo = 'mongodb+srv://user:<password>@xxxxx.zzzzz.mongodb.net/CarExample?retryWrites=true&w=majority';
        mongoose.connect(dbinfo,
            {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            }
        );
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(router);
    }
}

export default new App().server;