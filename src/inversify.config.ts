import { TYPES } from '@Constant';
import { Movie } from '@Entity/movie';
import { Repository } from 'typeorm';
import {AsyncContainerModule, interfaces} from "inversify";
import { getDBConnection } from "./db";
import { getMovieRepository } from '@Repository/movie.repository';
import { MovieService } from '@Service/movie.service';
import { TestMiddleware } from '@Middleware/test.middleware';

export const binding = new AsyncContainerModule(async (bind: interfaces.Bind) => {

    await getDBConnection();
    await require("@Controller/home.controller");


    bind<Repository<Movie>>(TYPES["Repository<Movie>"]).toDynamicValue( () => {
        return getMovieRepository();
    }).inRequestScope();

    bind<MovieService>(TYPES.MovieService).to(MovieService).inRequestScope();
    bind<TestMiddleware>(TYPES.TestMiddleware).to(TestMiddleware).inRequestScope();
})