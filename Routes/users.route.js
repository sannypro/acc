const express = require('express')


const router = express.Router();
let users = [
    {
        "id": "1",
        "name": "sanny",
        "gander": "male",
        "contact": "01995416425",
        "address": "munshiganj",
        "photoUrl": "https://i.ibb.co/8zLQYTS/photo-1633332755192-727a05c4013d.jpg"
    },
    {
        "id": "2",
        "name": "rimel",
        "gander": "male",
        "contact": "01995416425",
        "address": "munshiganj",
        "photoUrl": "https://i.ibb.co/8zLQYTS/photo-1633332755192-727a05c4013d.jpg"
    },
    {
        "id": "3",
        "name": "hasan",
        "gander": "male",
        "contact": "01995416425",
        "address": "munshiganj",
        "photoUrl": "https://i.ibb.co/8zLQYTS/photo-1633332755192-727a05c4013d.jpg"
    },
    {
        "id": "4",
        "name": "hamid",
        "gander": "male",
        "contact": "01995416425",
        "address": "munshiganj",
        "photoUrl": "https://i.ibb.co/8zLQYTS/photo-1633332755192-727a05c4013d.jpg"
    }
]
router.get('/random', (req, res) => {

    const randomElement = Math.floor(Math.random() * users.length)
    const randomUser = users[randomElement]

    res.send(randomUser)
})

router.get('/all', (req, res) => {

    const query = req.query

    if (query) {
        const limit = query.limit
        if (limit > users.length) {
            res.send(`json file has only ${users.length} users`)
        }
        const sliceArray = users.slice(0, limit)

        console.log(sliceArray);
        res.send(sliceArray)

    }
    else {
        res.send(users)
    }
})

router.post('/save', async (req, res) => {
    const newUser = req.body
    const newUserProperties = Object.keys(newUser)
    if (newUserProperties.length !== 6) {
        res.send("please set all property")
    }
    else if (newUserProperties[0] !== 'id') {
        res.send('Please set id')
    }
    else if (newUserProperties[1] !== 'name') {
        res.send('Please set name')
    }
    else if (newUserProperties[2] !== 'gander') {
        res.send('Please set gander')
    }
    else if (newUserProperties[3] !== 'contact') {
        res.send('Please set contact')
    }
    else if (newUserProperties[4] !== 'address') {
        res.send('Please set address')
    }
    else if (newUserProperties[5] !== 'photoUrl') {
        res.send('Please set photoUrl')
    }


    else {
        users.push(newUser)

        res.send(users)
    }

})
router.patch('/update/:id', (req, res) => {
    const { id } = req.params

    const newData = users.find(user => Number(user.id) == Number(id))

    newData.id = id;
    newData.name = req.body.name
    newData.gander = req.body.gander
    newData.contact = req.body.contact

    newData.address = req.body.address
    newData.photoUrl = req.body.photoUrl
    res.send(newData)
})
router.delete('/delete/:id', (req, res) => {
    const { id } = req.params
    const removedUser = users.filter(user => Number(user.id) !== Number(id))
    users = removedUser
    res.send(users)
})
module.exports = router