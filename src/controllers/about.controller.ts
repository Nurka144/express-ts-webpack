import * as express from 'express'

export class AboutPage{
    about(req: express.Request, res: express.Response) {
        res.send('about')
    }
}