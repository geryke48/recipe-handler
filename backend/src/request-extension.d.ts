import { EntityRepository, IDatabaseDriver, MikroORM } from "@mikro-orm/core";

declare global {
    namespace Express {
        interface Request {
            orm: MikroORM<IDatabaseDriver>;
        }
    }
}