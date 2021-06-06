import jsonwebtoken from 'jsonwebtoken';
import { User } from '../entities/users';
import { secret } from './secret';

export function generateJwt(user: User) {
    const payload = {
        sub: user.id,
        role: user.role,
        username: user.username,
    };

    const token = jsonwebtoken.sign(payload, secret);

    return token;
}