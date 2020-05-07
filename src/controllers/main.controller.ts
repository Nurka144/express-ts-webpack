import * as express from 'express'

export class MainPage{

    main(req: express.Request, res: express.Response) {
        res.send('index')
    }

}