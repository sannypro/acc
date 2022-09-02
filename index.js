const express = require('express')
const router = require('./Routes/users.route')
const app = express();
const port = process.env.PORT || 5000
const usersRouter = require('./Routes/users.route')
app.use(express.json())




app.use('/user', usersRouter)











app.listen(port, () => {
    console.log(`app is listining ${port}`)
})