import {Request, Response} from "express";
import { UserRepository } from "@/repository/user.repository";

const repository: UserRepository = new UserRepository();

const index = async (_req: Request, res: Response) => {
    const data = await repository.findAll();
    return res.json({data});
}

export default {
    index
}

