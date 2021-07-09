import useSWR from "swr";
import fetcher from "core/libs/fetch";

const useMovies = () => {
    const { data, isValidating } = useSWR(`${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`, fetcher);
    const movies = data && data.results ? data.results : data;
    return [movies, { isValidating }];
};
export default useMovies;
