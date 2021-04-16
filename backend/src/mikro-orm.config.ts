import { Configuration, IDatabaseDriver, Options } from "@mikro-orm/core";
import { env } from "process";
import { Ingredient } from "./entities/ingredient";
import { Recipe } from "./entities/recipe";

//import { env } from 'process';

export default {
    entities: [Recipe, Ingredient],
    dbName: env.NODE_ENV == 'test' ? 'recipeHandler.test.sqlite' : 'recipeHandler.sqlite',
    //dbName: 'recipeHandler',
    type: 'sqlite'
} as Options<IDatabaseDriver> | Configuration<IDatabaseDriver>;