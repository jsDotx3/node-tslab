import { User } from "@/models/user.model";
import { getManager } from "typeorm";

export class UserRepository {
    findAll(): Promise<User[]> {
        return getManager().getRepository(User).find({ take: 5 });
    }
}
