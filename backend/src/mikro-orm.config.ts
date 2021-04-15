import { Configuration, IDatabaseDriver, Options } from "@mikro-orm/core";
import { Ingredient } from "./entities/ingredient";
import { Recipe } from "./entities/recipe";

export default {
    entities: [Recipe, Ingredient],
    dbName: 'recipeHandler',
    type: 'sqlite'
} as Options<IDatabaseDriver> | Configuration<IDatabaseDriver>;