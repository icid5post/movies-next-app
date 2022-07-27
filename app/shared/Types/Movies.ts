import {TypeMaterialIconName} from "@/shared/Types/Icon.types";

export interface IGenre{
    _id: string;
    name: string;
    slug: string;
    description: string;
    icon: TypeMaterialIconName
}

export interface IParametr{
    year: string;
    duration: number;
    country: string; 
}

export interface IActor{
    _id: string;
    photo: string;
    name: string;
    slug: string;
}

export interface IMovie{
    _id: string;
    poster: string;
    bigPoster: string;
    title: string;
    parameters: IParametr;
    genres: IGenre[];
    actors: IActor[];
    countOpened: number;
    videoUrl: string;
    rating: number;
    slug: string;
}