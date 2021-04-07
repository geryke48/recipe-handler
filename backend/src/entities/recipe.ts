import { Entity, PrimaryKey, Property } from "@mikro-orm/core"

@Entity()
export class Recipe {

    @PrimaryKey()
    id!: number;

    @Property()
    name!: String;

    @Property()
    description!: String;

    @Property()
    guide!: String;

    //ingredients: 
}