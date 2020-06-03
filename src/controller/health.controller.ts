import {Request, Response} from "express";

const index = (_req: Request, res: Response) => {
    return res.json({
        uptime: process.uptime(),
        message: 'OK'
    })
}

export default {
    index
}

