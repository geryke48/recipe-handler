import { Router } from 'express';
import { recipeRouter } from './recipe-controller';

export const router = Router();

router.use('/recipes', recipeRouter);
