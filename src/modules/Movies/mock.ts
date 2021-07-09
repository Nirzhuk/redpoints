import { Movie } from "./types";

export const createMockMovie = ():Movie => ({
    id: '',
    title: '',
    overview: '',
    release_date: '',
    vote_average: 0,
    poster_path: '',
    genre_ids: [],
    adult: false
})