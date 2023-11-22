//import Router
import { Router } from 'express'
import { connection } from '../../config/dbConnection.js'

//create Router
export const contactRouter = Router()

// Define routes
contactRouter.get('/', async (req, res) => {

    const [row] = await connection.query('SELECT * FROM contact')
    res.render('view_main', {
        contacts: row
    })
})

contactRouter.post('/contact', async (req, res) => {

    const { name, phone } = req.body

    const [row] = await connection.query('INSERT INTO contact(name_contact,num) VALUE (?,?)', [name, phone])

    res.redirect('/')
})

