import {createConnection} from "typeorm";

export default async () =>await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "",
    password: "",
    database: "",
    entities: [
        __dirname + "/../models/*.ts"
    ],
    logging: true
});
