import app from '../config/server.js'
import { contactRouter } from './routes/contacts.js'

//Routes
app.use('/', contactRouter)

//set response status to 404
app.use((req, res) => {
    //send custom 404 error message
    res.status(404).send('<h1>404</h1>').json({ message: 'Movie not found' })
})

app.listen(app.get('port'), () => {
    console.log(`Server is running on port http://localhost:${app.get('port')}`);
});

