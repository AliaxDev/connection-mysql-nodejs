import express, { json } from 'express'
import { corsMiddleware } from "./cors.js"
import path from 'path';
import bodyParser from 'body-parser'

//export the app
const app = express();
//hiden x-powered-by'
app.disable('x-powered-by')

//middleware
app.use(json())
app.use(corsMiddleware())

//settings
//set and validate PORT 
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd() + '/app/views'));
// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(process.cwd() + '/static')))

export default app
