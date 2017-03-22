import * as express from "express";
import * as path from "path";

export class requestController{
    getHomePage(req: express.Request, res: express.Response, next: express.NextFunction){
        var new_path=path.join(__dirname,'../views/index.html');
          res.sendFile(new_path)
  }

  getApiPage(req: express.Request, res: express.Response, next: express.NextFunction){
          res.send("this is a API Page")
  }
  
}