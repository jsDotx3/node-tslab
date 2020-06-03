import {Request, Response} from "express";

const index = (_req: Request, res: Response) => {
    return res.json({message: 'Welcome'})
}

export default {
    index
}

