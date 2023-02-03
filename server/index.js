const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db.js')
const colors = require('colors')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const cors = require('cors')

dotenv.config()

connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('API is running...')
})
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Live @ port ${PORT}...`.yellow.bold)
})