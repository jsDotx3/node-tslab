import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column('varchar')
    username?: undefined;

    @Column('varchar')
    password?: Date;

}
