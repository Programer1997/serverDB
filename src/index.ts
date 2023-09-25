import express from "express";
import {Pool} from "pg";

const app = express();
const PORT = 3000;
/*
const client = new Pool({
    user: "postgres",
    database: "pg_test",
    port: 5432,
    host: "localhost",
    password: "Abraham970621A"
  });

client.connect();

const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await client.end()*/

  app.use(express.json());

  app.get('/',(req,res)=>{
    res.send('welcome to the tinyLink Sever');
  });

  app.post('/api/users',(req,res)=>{
    const data = req.body;
    res.json(data);
  });

  app.listen(PORT,()=>{
    console.log(`server working on port : ${PORT}`);
  });
  
