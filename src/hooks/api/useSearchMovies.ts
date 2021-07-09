import useSWR from "swr";
import fetcher from "core/libs/fetch";

const useSearchMovies = (query:string) => {
    const searchedQuery = query ? `${process.env.REACT_APP_API_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}` : null
    const { data, isValidating } = useSWR(searchedQuery, fetcher);
    const movies = data && data.results ? data.results : data;
    return [movies, { isValidating }];
};
export default useSearchMovies;
