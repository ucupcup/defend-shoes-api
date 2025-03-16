import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { environment } from './libs'
import routes from './routes'
import { HandlingError } from './utils/HandlingError'

const app = express()
const port = environment.PORT || 8000
dotenv.config()
app.use(cors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token', 'X-Requested-With', 'Accept', 'Accept-Version', 'Content-Length', 'Content-MD5', 'Content-Type', 'Date', 'X-Api-Version'],
    credentials: true,
    preflightContinue: false
}));
app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.json())
app.use(routes);
app.use(HandlingError)

app.listen(port, () => {
    console.log(`Server running on port ${port}🚀`)
})

export default app