import * as express from "express";
import {requestController} from "../controllers/requestController"
 class Api {
        router:express.Router;
        
          public  APiRoutes(){

                let router=express.Router();
                let requestPageController= new requestController();
                router.get('/',requestPageController.getApiPage);
                return router;
        }
       
}
//var router= new Api().APiRoutes();
export let  api_router=new Api().APiRoutes();