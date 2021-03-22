import * as express from 'express';
import db from '../db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});
router.get('/api/users', async (req, res) => {
    try {
        res.json(await db.Users.all());

    } catch (err){
        console.log(err);
        res.sendStatus(500)
    }

})

router.get('/api/chirps', async (req, res) => {
    try {
        res.json(await db.Chirps.all());

    } catch (err){
        console.log(err);
        res.sendStatus(500)
    }

})

export default router;