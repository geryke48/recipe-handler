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
        const recipes = await req.recipeRepository!.findAll(['ingredients']);
        res.send(recipes);
    })
    .post('', async (req, res) => {
        const recipe = new Recipe();

        const wrappedRecipe = wrap(recipe);

        wrappedRecipe.assign(req.body, { em: req.orm.em });

        await req.recipeRepository!.persistAndFlush(recipe);

        res.send(recipe);

    })
    .get('/:id', async (req, res) => {
        const recipe = await req.recipeRepository!.findOne({ id: Number(req.params.id) }, ['ingredients']);
        if(!recipe){
            res.sendStatus(404);
        }
        res.send(recipe);
    })

    .get('/find/:name', async (req, res) => {
        const recipes = await req.recipeRepository!.find({ name: req.params.name });
        res.send(recipes);
    })

    .delete('/:id', async (req, res) => {
        await req.recipeRepository!.nativeDelete({ id: Number(req.params.id)});
        res.sendStatus(200);
    })

    .put('/:id', async (req, res) => {
        const recipe = await req.recipeRepository!.findOne({ id: Number(req.params.id) }, ['ingredients']);
        if(!recipe){
            res.sendStatus(404);
        }
        const wrappedRecipe = wrap(recipe);

        wrappedRecipe.assign(req.body, { em: req.orm.em });

        await req.recipeRepository!.persistAndFlush(recipe);

        res.send(recipe);
    })