import { AddIngredient } from "./addIngredient";

export interface Recipe {
    id: Number;
    name: string;
    description: string;
    guide: string;
    value: [Number];
    ingredients: [AddIngredient]
}