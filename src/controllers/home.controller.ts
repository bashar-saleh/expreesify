

import { controller, httpGet } from "inversify-express-utils";
import { Request, Response, NextFunction } from "express";
import { inject } from "inversify";
import { TYPES } from "@Constant";
import { TestMiddlewareFactory } from '@Middleware/factories/test.factory.middleware';
import { MovieService } from "@Service/movie.service";


@controller("/home")
export class HomeController {

    @inject(TYPES["MovieService"]) movieService: MovieService


    @httpGet("/", TestMiddlewareFactory({role:"Admin"}))
    private async index(req:Request, res:Response, next:NextFunction){

        const movies =  await this.movieService.getAllMovies();
        return res.json({movies});
       
    }

}