import express from "express";
import router from "./routes.js"

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();

        const dbinfo = 'mongodb+srv://leandrokjrdias:dI0PF6liwbrzWHOf@cluster0.qiozdd3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
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
//dI0PF6liwbrzWHOf
export default new App().server;