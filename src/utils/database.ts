import { Pool } from "pg"

let conn: any

if(!conn){ 
    conn = new Pool({ 
        user: "Joaquinr",
        password: "tomas114", 
        host: "localhost",
        port: 5432,
        database: "taskdb"
    })
}

export { conn };