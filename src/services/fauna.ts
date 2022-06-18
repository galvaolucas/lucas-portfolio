import fauna from 'faunadb';
import { Client } from 'faunadb';

export const faunaClient = new Client({
    secret: process.env.FAUNA_DB_KEY as string,
    domain: 'db.us.fauna.com',
});