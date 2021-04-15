import { Collection, Entity, ManyToMany, PrimaryKey, Property } from "@mikro-orm/core"
import { Ingredient } from "./ingredient";

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
    
    @Property()
    value!: [number];

    @ManyToMany(()=> Ingredient, 'recipes', { owner: true })
    ingredients = new Collection<Ingredient>(this);
}