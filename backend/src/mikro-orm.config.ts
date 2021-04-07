import { Configuration, IDatabaseDriver, Options } from "@mikro-orm/core";

export default {
    entities: [],
    dbName: 'recipeHandler',
    type: 'sqlite'
} as Options<IDatabaseDriver> | Configuration<IDatabaseDriver>;