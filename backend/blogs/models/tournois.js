const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const TournoisOrg= new Schema({

    name:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        format: '%Y-%m-%d',
        required: true,
    },
    description:{
        type: String,
    },
    participant:{
    }
});

module.exports= mongoose.model('Tournois', TournoisOrg)