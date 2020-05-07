import {Routes} from './routes/main.route'
import express from 'express'
import connectDB from '../config/database'

class App {
    protected app: express.Application
    protected type: string
    protected port: number

    constructor(NODE_ENV: string, PORT: number) {
        this.type = NODE_ENV
        this.port = PORT
        this.app = express()
    }

    __routes() {
        let __routes = new Routes
        __routes.paths(this.app)
    }


    runserver() {
        this.__routes()
        this.app.listen(this.port, function(){
            console.log('Server has been started');
            connectDB()
        });
    }

}

new App('development', 3000).runserver()
