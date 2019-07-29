import { getConnection } from "typeorm";
import { Movie } from "@Entity/movie";


export function getMovieRepository(){
    const conn = getConnection();
    const repo = conn.getRepository(Movie);
    return repo;
}