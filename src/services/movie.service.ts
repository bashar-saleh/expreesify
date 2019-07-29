import { TYPES } from '@Constant';
import { inject, injectable } from 'inversify';
import { Movie } from '@Entity/movie';
import { Repository } from 'typeorm';


@injectable()
export class MovieService {

    @inject(TYPES["Repository<Movie>"]) movieRepository: Repository<Movie>;

    public async getAllMovies(){
        const movies = await this.movieRepository.find();
        return movies;
    }
}