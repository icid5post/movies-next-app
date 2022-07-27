import React from 'react';
import {IMovie} from "@/shared/Types/Movies";
import style from './style.module.scss';
import MovieItem from "@/components/layouts/Sidebar/MoviesContainer/MovieItem";
import Link from "next/link";

interface IMoviesList{
    movies: IMovie[];
    title: string;
    link: string;
}

const MoviesList:React.FC<IMoviesList> = ({title, movies, link}) => {
    return (
        <div className={style.list}>
            <div className={style.heading}>
                {title}
            </div>
            {
                movies.map((movie)=> <MovieItem movie={movie} key={movie._id}/>)
            }
            <Link href={link}>
                <a className={style.button}>
                    See more
                </a>
            </Link>

        </div>
    );
};

export default MoviesList;