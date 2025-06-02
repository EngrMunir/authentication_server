import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import router from './app/routes'
const app:Application = express()

// parsers
app.use(express.json())
// app.use(cors())
app.use(cors({ origin: ['https://car-store-frontend-drab.vercel.app','http://localhost:5173'], credentials: true }))

// application routes
app.use('/api', router);


app.get('/',(req:Request, res:Response)=>{
    res.send('home page')
})
// app.use(globalErrorHandler)

// app.use(notFound)
export default app;

