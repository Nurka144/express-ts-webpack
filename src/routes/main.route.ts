import * as path from 'path'
import * as express from 'express'
import { MainPage } from '../controllers/main.controller'
import { AboutPage } from '../controllers/about.controller'

export class Routes{

    paths(app: express.Application) {
        
        /*
        | get request
        */

        app.get('/', new MainPage().main)
        app.get('/about', new AboutPage().about)

        /*
        | post request
        */

    }

}
