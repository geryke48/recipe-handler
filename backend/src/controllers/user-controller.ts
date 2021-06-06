import { wrap } from '@mikro-orm/core';
import { Router } from 'express';
import { Users } from '../entities/users';
import { UserRole } from '../entities/users';

export const userRouter = Router();

userRouter
    .use((req, res, next) => {
        req.userRepository = req.orm.em.getRepository(Users);
        next();
    })
    .post('', async (req, res) => {
        const user = new Users();

        const wrappedUser = wrap(user);
        wrappedUser.assign(req.body);
        user.role = UserRole.User;

        await req.userRepository?.persistAndFlush(user);

        res.send(user);
    })
    .get('', async (req, res) => {
        const users = (req as any).user;
        //const users = await req.userRepository!.findAll();
        res.send(users);
    })