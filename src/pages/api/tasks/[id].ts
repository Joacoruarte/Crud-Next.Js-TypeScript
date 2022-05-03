import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "src/utils/database";

export default async (req: NextApiRequest , res: NextApiResponse ) => { 
    const { method , query , body } = req
    
    switch (method) {
        case "GET":
            try {
                const text = 'SELECT * FROM task WHERE id = $1'
                const values = [query.id]
                const response = await conn.query(text , values)
                if(response.rows.length) return res.json(response.rows[0])
                throw new Error("This task does not exist"); 
            } catch (error: any) {
                return res.status(400).json({ error: error.message})
            }
        case "PUT": 
            try {
                const { title , description } = body
                const text = 'UPDATE task SET title = $1 , description = $2 WHERE id = $3 RETURNING *'
                const values = [title , description , query.id]
                const response = await conn.query(text , values)
                if(response.rows.length) return res.json(response.rows[0])
                throw new Error("This task does not exist"); 
            } catch (error: any) {
                return res.status(400).json({ error: error.message})
            }   
        case "DELETE": 
            try {
                const text = 'DELETE FROM task WHERE id = $1 RETURNING *'
                const values = [query.id]
                const response = await conn.query(text , values)
                if(response.rowCount !== 0) return res.json(response.rows[0])
                throw new Error("This task does not exist"); 
            } catch (error: any) {
                return res.status(400).json({ error: error.message})
            } 
        default:
            return res.status(400).json("Method not allowed")
    }

}