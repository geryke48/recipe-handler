import { wrap } from '@mikro-orm/core';
import { Router } from 'express';
import { Recipe } from '../entities/recipe';

export const recipeRouter = Router();

recipeRouter
    .use((req, res, next) => {
        req.recipeRepository = req.orm.em.getRepository(Recipe);
        next();
    })
    .get('', async (req, res) => {
        const recipes = await req.recipeRepository!.findAll();
        res.send(recipes);
    })
    .post('', async (req, res) => {
        const recipe = new Recipe();

        const wrappedRecipe = wrap(recipe);

        wrappedRecipe.assign(req.body);

        await req.recipeRepository!.persistAndFlush(recipe);

        res.send(recipe);

    })
    .get('/:id', () => {})