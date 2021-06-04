import { wrap } from '@mikro-orm/core';
import { Router } from 'express';
import { Ingredient } from '../entities/ingredient';

export const ingredientRouter = Router();

ingredientRouter
    .use((req, res, next) => {
        req.ingredientRepository = req.orm.em.getRepository(Ingredient);
        next();
    })
    .get('', async (req, res) => {
        const ingredients = await req.ingredientRepository!.findAll();
        res.send(ingredients);
    })
    .post('', async (req, res) => {
        const ingredient = new Ingredient();

        const wrappedIngredient = wrap(ingredient);

        wrappedIngredient.assign(req.body, { em: req.orm.em });

        await req.ingredientRepository!.persistAndFlush(ingredient);

        res.send(ingredient);

    })
    .get('/:id', async (req, res) => {
        const ingredient = await req.ingredientRepository!.findOne({ id: Number(req.params.id) });
        if(!ingredient){
            res.sendStatus(404);
        }
        res.send(ingredient);
    })

    .get('/find/:name', async (req, res) => {
        const ingredients = await req.ingredientRepository!.find({ name: req.params.name });
        res.send(ingredients);
    })

    .delete('/:id', async (req, res) => {
        await req.ingredientRepository!.nativeDelete({ id: Number(req.params.id)});
        res.sendStatus(200);
    })

    .put('/:id', async (req, res) => {
        const ingredient = await req.ingredientRepository!.findOne({ id: Number(req.params.id) });
        if(!ingredient){
            res.sendStatus(404);
        }
        const wrappedIngredient = wrap(ingredient);

        wrappedIngredient.assign(req.body, { em: req.orm.em });

        await req.ingredientRepository!.persistAndFlush(ingredient);

        res.send(ingredient);
    })