import { Collection, Entity, Enum, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { Recipe } from "./recipe";

@Entity()
export class User {
    @PrimaryKey()
    id!: number;

    @Property()
    username!: string;

    @Property({ hidden: true })
    password!: string;

    @Enum()
    role: UserRole = UserRole.User;

    @OneToMany(() => Recipe, recipe => recipe.user)
    recipes = new Collection<Recipe>(this);
}

export enum UserRole {
    Guest = 'GUEST',
    User = 'USER',
    Admin = 'ADMIN',
}