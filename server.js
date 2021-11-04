const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const cors = require('cors')
const passport = require('passport')
const passportUseStrategies = require('./passport')
const authRouter = require('./routes/auth.routes')
const {createServer} = require('http')
const {Server} = require('socket.io')
const socketHandler = require('./socket')
const path = require('path')


const PORT = process.env.PORT || config.get('port')
const mongoURI = config.get('mongoUri')

const app = express()
app.use(cors())
const httpServer = createServer(app)
const io = new Server(httpServer)
socketHandler(io)

app.use(express.json({extended:true}))

passportUseStrategies(passport)
app.use(passport.initialize())



if (process.env.PROD === 'production') {
    app.use(express.static(path.resolve(__dirname + '/public')))
    const getMainPage = (req, res) => {
        res.sendFile(path.resolve(__dirname + '/public/index.html'))
    }
    app.get('/', getMainPage)
    app.get('/auth', getMainPage)
}

app.use('/auth', authRouter)

async function start() {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (e) {
        console.log(e)
        console.log('Problem with connecting to database')
    }

    try {
        httpServer.listen(PORT, () => {
            console.log(`server started on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
        console.log('Problem with starting HTTP server')
        process.exit(1)
    }
}



start()