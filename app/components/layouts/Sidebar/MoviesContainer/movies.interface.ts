import {IMovie} from "@/shared/Types/Movies";

export interface IMoviesInterface{
    title: string;
    link: string;
    movies: IMovie[];
}