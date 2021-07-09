import useSWR from "swr";
import fetcher from "core/libs/fetch";

const useGenres = () => {
    const { data, isValidating } = useSWR(`${process.env.REACT_APP_API_URL}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`, fetcher);
    const genres = data && data.genres ? data.genres : data;
    return [genres, { isValidating }];
};
export default useGenres;
