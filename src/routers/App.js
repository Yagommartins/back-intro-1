import express from 'express'
import dootenv from 'dotenv'
import homeRouters from './roters/Home.Routes.js'

dootenv.config()

class App {
    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use(espress.urlencoded({ extended: true }))
        }

        routes() {
            this.app.use('/', homeRouters)
        }
}

export default new App().app