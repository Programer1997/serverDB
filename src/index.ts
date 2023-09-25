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
  
    res.send(data);
  });

  app.post('/api/users',(req,res)=>{
    const data = req.body;
    res.json(data);
  });

  app.listen(PORT,()=>{
    console.log(`server working on port : ${PORT}`);
  });
  
