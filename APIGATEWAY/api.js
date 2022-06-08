const express = require('express')
const app = express()
app.use(express.json())
const axios=require("axios")
const http = require("http");
const cors = require("cors");
const socketIO = require("socket.io");
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
const server = http.createServer(app)
const io = socketIO(server, {
 cors: {
   origin: "http://localhost:3000",
 },
});



app.post('/login', async (req, res) => {
console.log(req.body)
  const data = await axios.post("http://localhost:5001/login",req.body)
  const login=data.data
  res.send(login)
})

app.post('/register', async (req, res) => {
    console.log(req.body)
      const data = await axios.post("http://localhost:5001/register",req.body)
      const register=data.data
      res.send(register)
    })
// creates a new channel
    app.post('/', async (req, res) => {
        console.log(req.body)
          const data = await axios.post("http://localhost:5000/",req.body)
          const channel=data.data
          res.send(channel)
        })
// live stream info
app.post('/stream', async (req, res) => {
          console.log(req.body)
            const data = await axios.post("http://localhost:5000/stream",req.body)
            const stream=data.data
            res.send(stream)
          })

// get all channels
          app.get('/channels', async (req, res) => {
           
              const data = await axios.get("http://localhost:5000/channels")
              const channels=data.data
              res.send(channels)
            })
  // get playback url
            app.post('/plays', async (req, res) => {
           
              const data = await axios.post("http://localhost:5000/plays",req.body)
              const channels=data.data
              res.send(channels)
            })
  // update tournoi's partici
            app.post('/update', async (req, res) => {
           
              const data = await axios.post("http://localhost:5002/update",req.body)
              const tournoi=data.data
              res.send(tournoi)
            })
  
  // add tournoi
  app.post('/tournois', async (req, res) => {
           
    const data = await axios.post("http://localhost:5002/tournois",req.body)
    const tournoi=data.data
    res.send(tournoi)
  })

  // get tournois
  app.get('/tournois', async (req, res) => {
           
    const data = await axios.get("http://localhost:5002/tournois")
    const tournoi=data.data
    res.send(tournoi)
  })
// get all the posts
  app.get('/posts', async (req, res) => {
           
    const data = await axios.get("http://localhost:50002/posts")
    const post=data.data
    res.send(post)
  })
// add post
  app.post('/posts', async (req, res) => {
           
    const data = await axios.post("http://localhost:50002/posts",req.body)
    const appost=data.data
    res.send(appost)
  })








io.on("connection", (socket) => {
 // Get nickname and channel.
 const { idstream, iduser } = socket.handshake.query;
 console.log(`someoneconnected`);
 // Join the user to the channel.
 socket.join(idstream);


 // Handle disconnect
 socket.on("disconnect", () => {
    console.log(`user disconnected`);
    
  });
 

 
socket.on("MESSAGE_SEND", (data) => {

    socket.broadcast.emit("NEW_MESSAGE", data);
 
 });
})
 

var port = process.env.port || 8000;
app.listen(port, function () { return console.log("server started on port ".concat(port)); });