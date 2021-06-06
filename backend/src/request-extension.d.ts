import { EntityRepository, IDatabaseDriver, MikroORM } from "@mikro-orm/core";
import { Recipe } from "./entities/recipe";
import { Ingredient } from "./entities/ingredient";
import { User } from "./entities/user";

declare global {
    namespace Express {
        interface Request {
            orm: MikroORM<IDatabaseDriver>;
            recipeRepository?: EntityRepository<Recipe>;
            ingredientRepository?: EntityRepository<Ingredient>;
            userRepository?: EntityRepository<Users>;
        }
    }
}