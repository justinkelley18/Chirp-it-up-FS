
import { Router } from 'express'
import db from '../db'

const router = Router()

//get all chirps
router.get('/', async (req, res) => {

    try {
        let chirps = await db.Chirps.getAll();
        res.json(chirps);

    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})
//get one chirp
router.get(`/:id?`, async (req, res) => {
    try {
        let [chirp] = await db.Chirps.getOne(req.params.id);
        res.json(chirp);
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

router.post('/', async (req, res) => {
    try {
        let newChirp = await (db.Chirps.post(req.body.name, req.body.text));
        res.json(newChirp);
        console.log(newChirp)
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})


router.put('/:id', async (req, res)=>{
    try {
        let id=req.params.id;
        let chirp=req.body.text;
       let r = await (db.Chirps.edit(id,chirp));
       res.send(r)
    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let id= req.params.id
        res.send(db.Chirps.deleteOne(id));
    }catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

export default router








// import { Router } from "express";
// import ChirpStore from "../utils/chirpsstore";

// const router = Router();

// // GET /api/chirps
// router.get("/", (req, res) => {
//   const data = ChirpStore.GetChirps();
//   const chirps = Object.keys(data).map(key => {
   
//     return {
//       id: key,
//       username: data[key].username, 
//       message: data[key].message 
//     };
//   });

//   chirps.pop(); 
//   res.json(chirps);
// });

// // GET /api/chirps/:chirpid

// router.get("/:chirpid", (req, res) => { 
//   const chirpid = req.params.chirpid;
//   const chirp = ChirpStore.GetChirp(chirpid);
//   res.json({ id: chirpid, ...chirp }); 
 
// });
// // POST /api/chirps
// router.post("/", (req, res) => {
//   const chirp = req.body;
//   ChirpStore.CreateChirp(chirp);
//   res.status(201).json("Chirp Created");
//   // { username: '', message: ''}
// });

// // PUT /api/chirps/:chirpid
// router.put("/:chirpid", (req, res) => {
//   const chirpid = req.params.chirpid;
//   const chirp = req.body;
//   ChirpStore.UpdateChirp(chirpid, chirp);
//   res.status(200).json(`Chirp ${chirpid} Updated`);
// });

// // DELETE /api/chirps/:chirpid
// router.delete("/:chirpid", (req, res) => {
//   const chirpid = req.params.chirpid;
//   ChirpStore.DeleteChirp(chirpid);
//   res.status(201).json(`Chirp ${chirpid} Deleted`);
// });

// export default router;
