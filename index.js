import { app } from "./src/config/server.js"


app.get('/example', (req, res) => {
    res.send('This is an example of a GET request.');
});