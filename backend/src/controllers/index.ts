import { Router } from 'express';
import { ingredientRouter } from './ingredient-controller';
import { recipeRouter } from './recipe-controller';
import { userRouter } from './user-controller';

export const router = Router();

router.use('/recipes', recipeRouter);
router.use('/ingredients', ingredientRouter);
router.use('/users', userRouter);
