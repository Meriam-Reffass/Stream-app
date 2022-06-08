const express = require('express');
const router = express.Router();

//Tournois Model 
const Tournois= require('../../models/tournois');

//Get

router.get('/', (req,res)=>{
    Tournois.find()
            .then( tourn=> res.json(tourn));
    
});
//POST
router.post('/', (req,res)=>{
    const newTournois= new Tournois({
        name: req.body.name,
        date: req.body.date,
        description: req.body.description,
        participant: []
    })
    newTournois.save()
                .then(tou=> res.json(tou))
})


module.exports= router;