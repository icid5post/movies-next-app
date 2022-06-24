import axios from "axios";
import {getGenresUrls} from "../config/api.config";

export const GenreService = {
    async getPopularGenres(limit=4) {
        return axios.get<IGenre[]>(getGenresUrls('/popular'), {
            params: {
                limit
            }
        })
    }
}