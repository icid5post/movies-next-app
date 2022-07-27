import {useQuery} from "react-query";
import {GenreService} from "@/services/genre.service";
import {IMenuItem} from "@/components/layouts/Navigation/MenuContainer/Menu.interface";
import {getGenreUrl} from "../../../../../config/url.config";

export const usePopularGengres = () => {
    const queryData = useQuery('popularGenreMenu', () => GenreService.getAll(), {
        select: ({data}) => data.map(genre=>({
            link: getGenreUrl(genre.slug),
            icon: genre.icon,
            title: genre.name
        }as IMenuItem )).splice(0, 4),
        onError(error){
            // errors
        }
    })
    return queryData;

}