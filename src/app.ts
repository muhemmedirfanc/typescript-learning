import express,{Application,Request,Response} from 'express';
import morgan from 'morgan';

import api from './routes/api'

const app: Application = express();

app.use(morgan('dev'))

app.get('/',(_,res:Response)=>{res.json({status:'ok'}).status(200)})



app.listen(5000, ()=> console.log('Server running at port 5000'))

app.use('/api',api)