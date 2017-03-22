import * as express from "express";
import {router} from "./routes/index";
import * as path from "path";
class Server {

  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.listen(3000);
    this.app.use(router)
    var new_path=path.join(__dirname,'../');
    this.app.use(express.static(new_path))
    console.log("listetning on server 3000");
   
  }


}
var serverInstance= new Server()


