import { Collection, Entity, ManyToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { Recipe } from "./recipe";

@Entity()
export class Ingredient {
    @PrimaryKey()
    id!: number;

    @Property()
    name!: String;

    @Property()
    unit_of_measure!: String;

    @ManyToMany(() => Recipe, 'ingredients')
    recipes!: Recipe;
}