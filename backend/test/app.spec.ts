import { app } from '../src/app';
import supertest from 'supertest';

describe('Recipe Handler', () => {
    const user = { username: 'usr', password: 'pwd' };

    let requestHandle: supertest.SuperTest<supertest.Test>;

    beforeEach(() => {
        requestHandle = supertest(app);
    });

    describe('/recipes', () => {
        it('should return an array', async () => {
            await requestHandle
                .get('/recipes')
                .expect(200);
        });

        it('should return alma', async () => {
            await requestHandle
                .get('/recipes/1')
                .expect(200)
                .expect({
                    "id": 1,
                    "name": "alma",
                    "description": "alma es nem alma",
                    "guide": "fogd az almat es csinalj belole almat",
                    "value": [ '[2', ' 3', ' 4', ' 1]' ],
                    "ingredients": [],
                    "user": 'null'
                });
        });

        it('should post something', async () => {
            await requestHandle
                .post('/recipes')
                .send({
                    name: "ebed",
                    description: "vacsora",
                    guide: "tizorai",
                    value: [2, 3, 2]
                })
                .expect(200);
        });
    });
})