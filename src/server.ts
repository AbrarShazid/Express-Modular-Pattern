import express, { Request, Response } from "express";
import config from "./config";
import initDB from "./config/db";
import logger from "./middleware/logger";
import { userRoute } from "./modules/user/user.routes";
import { todosRoute } from "./modules/todo/todos.route";

const app = express();
const port = config.port;

//parser json 
app.use(express.json());
// parser form data 
app.use(express.urlencoded())

// initializing db 
initDB()

app.get("/",logger, (req: Request, res: Response) => {
  res.send("Hello World!!");
})

// users CRUD 
app.use('/users',userRoute)

// todos CRUD
app.use('/todos',todosRoute)

// Not found Route 
app.use((req:Request,res:Response)=>{
  res.status(404).json({
    success:false,
    message:"Route Not Found",
    path:req.path
  })
})
app.listen(port, () => {
  console.log(`This app is running port ${port}`);
})
