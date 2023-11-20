//import Router
import { Router } from 'express'
import mysql from 'mysql2/promise'
import { DEFAULT_CONFIG } from '../../config/dbConnection.js'

//create Router
export const contactRouter = Router()

const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG

export const connection = await mysql.createConnection(connectionString)

// Define routes
contactRouter.get('/', async (req, res) => {
    res.send('los contactos')

    const [contact] = await connection.query(
        'SELECT * FROM `contact`', []);

    res.send(contact)
})
