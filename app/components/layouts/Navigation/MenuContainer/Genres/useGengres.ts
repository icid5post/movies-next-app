import {useQuery} from "react-query";

export const useGengres = () => {
    const queryData = useQuery('popularGenreMenu', () => {

    })

    return queryData;
}