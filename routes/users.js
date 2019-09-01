const express = require("express");
const router = express.Router();
const Users = require('../Models/Users');


// router.post('/getUser', (req , res) => {
//     const email =req.body.email
//     const user = Users.find({email});
// })

// users.then((allUsers) => {
//     res.send({result: allUsers})
// })
// .catch(e => {
//     res.send({message: e.message});
// })


router.get('/getUser', async (req, res) => {
    try {
        const users = await Users.find({email})
        res.send(users);
    } catch(e) {
        res.send(500, {message: e.message});
    }
})

router.post('/addUser', async (req, res) => {
    try {
        const user = new Users(req.body);

        await user.save();
        res.send({message: "User successfully inserted!"})
    } catch(e) { 
        res.send(500, {message: e.message})
    }
})



// router.get("/getAll", (req, res) => {
//     Users.find({})
//     .then(result => res.send(result))
//     .catch(e => res.send({message: e.message}))
// })

// router.post("/add", (req, res) => {
//     const user = new Users(req.body);

//     user.save()
//     .then(() => res.send({message: "User inserted successfully!"}))
//     .catch(e => res.send({message: e.message}))
// })

// router.put("/update", (req, res) => {
//     Users.updateOne({email: req.body.email}, {age: req.body.age})
//     .then(result => res.send(result))
//     .catch(e => res.send({message: e.message}))
// })

// router.delete("/remove", (req, res) => {
//     Users.deleteOne({email: req.body.email})
//     .then(result => res.send(result))
//     .catch(e => res.send({message: e.message}))
// })

// router.get("/:id", (req, res) => {
//     console.log("/:id chal raha hai", req.params.id)
// })

module.exports = router;