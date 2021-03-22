import * as mysql from 'mysql';
import Users from './users';
import Chirps from './chirps';

export const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'newuser',
    password: 'password',
    database: 'chirper_fullstack'
});

export const Query =  (Query: string, values?: Array<string | number>) => {
    return new Promise <Array<any>>((resolve, reject) => {
        Connection.query(Query, values, (err, result) => {
            if (err) return reject(err);
            resolve(result);

        });
    });
};

export default {
    Users,
    Chirps
}