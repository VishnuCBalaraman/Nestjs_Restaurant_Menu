import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Menu {
    @ObjectIdColumn() 
    id: number;

    @Column()
    category: string;

    @Column()
    name: string;
}
