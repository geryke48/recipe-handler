import { EntityRepository, IDatabaseDriver, MikroORM } from "@mikro-orm/core";
import { Recipe } from "./entities/recipe";
import { Ingredient } from "./entities/ingredient";
import { User as ApplicationUser } from "./entities/users";

declare global {
    namespace Express {

        interface User extends ApplicationUser {}

        interface Request {
            orm: MikroORM<IDatabaseDriver>;
            recipeRepository?: EntityRepository<Recipe>;
            ingredientRepository?: EntityRepository<Ingredient>;
            userRepository?: EntityRepository<Users>;
        }
    }
}