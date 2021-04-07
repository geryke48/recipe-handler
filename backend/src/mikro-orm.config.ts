import { Configuration, IDatabaseDriver, Options } from "@mikro-orm/core";
import { Recipe } from "./entities/recipe";

export default {
    entities: [Recipe],
    dbName: 'recipeHandler',
    type: 'sqlite'
} as Options<IDatabaseDriver> | Configuration<IDatabaseDriver>;