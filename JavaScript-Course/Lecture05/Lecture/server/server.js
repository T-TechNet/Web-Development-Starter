const express = require('express')
const app = express()
const moongose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

const userRoute = require('./routes/user')

dotenv.config()

moongose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DBConnection is successful!'))
  .catch((err) => {
    console.log(err)
  })

app.get('/api', (req, res) => {
  res.json({
    users: ['user1', 'user2', 'user3'],
  })
})

app.use(cors())
app.use(express.json())
app.use('/api/auth', userRoute)
app.listen(process.env.PORT || 5000, () => {
  console.log('Backend server is running!')
})
