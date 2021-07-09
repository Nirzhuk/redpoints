

export interface Movie {
    id: string;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number
    poster_path: string;
    genre_ids: number[]
    adult: boolean;
}

export interface Genre {
    id: number;
    name: string;
}