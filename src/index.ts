import express from "express";
import {Pool} from "pg";

const app = express();
const PORT = 3000;

const client = new Pool({
    user: "postgres",
    database: "postgres",
    port: 5432,
    host: "localhost",
    password: "Abraham970621A"
  });

client.connect();



  app.use(express.json());

  app.get('/',(req,res)=>{
    res.send('welcome to the tinyLink Sever');
  });

  app.get("/users", async (req, res) => {
    const response = await client.query("SELECT * FROM users;");
  
    const data = response.rows;
    //console.log(response);
    res.send(data);
  });

  app.post('/api/users',async (req,res)=>{
    const {id,name,email,password} = req.body;

    const response = await client.query("INSERT INTO users (id,name,email,password) VALUES ($1,$2,$3,$4) RETURNING *",[id,name,email,password]);
    const data = response.rows;
    console.log(data);
    res.json(data);
  });

  app.listen(PORT,()=>{
    console.log(`server working on port : ${PORT}`);
  });
  
