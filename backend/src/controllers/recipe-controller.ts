import { Router } from 'express';
import { Recipe } from '../entities/recipe';

export const recipeRouter = Router();

recipeRouter
    .get('', async (req, res) => {
        const recipeRepository = req.orm.em.getRepository(Recipe);
        const recipes = await recipeRepository.findAll();
        res.send(recipes);
    })
    .post('', () => {})
    .get('/:id', () => {})