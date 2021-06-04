import { EntityRepository, IDatabaseDriver, MikroORM } from "@mikro-orm/core";
import { Recipe } from "./entities/recipe";
import { Ingredient } from "./entities/ingredient";

declare global {
    namespace Express {
        interface Request {
            orm: MikroORM<IDatabaseDriver>;
            recipeRepository?: EntityRepository<Recipe>;
            ingredientRepository?: EntityRepository<Ingredient>;
        }
    }
}