

import * as express from "express";
import {requestController} from "../controllers/requestController";
import {api_router} from "./api";
 class Route {
        router:express.Router;
        
          public  routes(){

                let router=express.Router();
                let requestPageController= new requestController();
                router.get('/',requestPageController.getHomePage);
                router.use('/api',api_router)
                return router;
        }
       
}
export let router=new Route().routes();