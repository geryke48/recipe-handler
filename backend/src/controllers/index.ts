import { Router } from 'express';
import { passport } from '../security/passport';
import { ingredientRouter } from './ingredient-controller';
import { recipeRouter } from './recipe-controller';
import { userRouter } from './user-controller';

export const router = Router();

router.use('/recipes', passport.authenticate('jwt', { session: false }), recipeRouter);
router.use('/ingredients', ingredientRouter);
router.use('/users', userRouter);
