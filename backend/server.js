const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const CORS=require('cors')
const tournois=require('./routes/api/Tourn');

const app= express();
//Tournois Model 
const Tournois= require('./models/tournois');
app.use(bodyParser.json());
app.use(CORS())
//DB config
const db = require('./Confaccess/key1').mongoURI;

mongoose.connect(db)
        .then(()=> console.log('Connected...'))
        .catch( err=> console.log(err));

//Use routes
app.use('/tournois', tournois);
app.post("/update",async(req,res)=>{
        
        
        let tournoi=await Tournois.find({name:req.body.name})
        
        tournoi[0].participant.push(req.body.username)
        let doc =await Tournois.findOneAndUpdate({name:req.body.name}, tournoi[0], {
                new: true
              });
              res.send(doc)

})

const port= 5000;
app.listen(port, ()=> console.log('Server started on port 5000'));