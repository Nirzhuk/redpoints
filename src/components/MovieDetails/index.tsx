import { useState,useCallback, useEffect } from 'react'
import styled from 'styled-components'
import Badge from 'components/CommonStyleds/Badge'
import useGenres from 'hooks/api/useGenres';
import { Genre, Movie } from 'modules/Movies/types';
import { getRandomColorFromWord } from 'core/libs/utils/colors';


const StyledImage = styled.img`
    display:block;
    height: 450px;
`;
const BookDetailsStyled = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: max-content 1fr;
  gap: 0px 10px;
  grid-template-areas:
    "Image ."
    "Image ."; 
`;
const StyledImageBookDetails = styled(StyledImage)`
 grid-area: Image;
 border-radius: 8px;
`

interface MovieDetailsProps {
    movie: Movie | null
}
const moviePosterPathOrigin = `${process.env.REACT_APP_API_IMAGES_URL}w600_and_h900_bestv2`;


const MovieDetails = ({ movie }: MovieDetailsProps) => {
    const [apiGenres] = useGenres()
    const [genrePerMovie, setGenrePerMovie] = useState<Genre[]>([]);

    const getGenresPerMovie = useCallback(
        (genres:Genre[],movieGenresIds:number[]):Genre[] => {
            const genresSelected = movieGenresIds.reduce((acc: Genre[], id: number) => {
                const genreObject = genres && genres.find((genre: Genre) => genre.id === id)
                genreObject && acc.push(genreObject)
                return acc;
            }, []);
            return genresSelected;
        },
        [],
    )

    useEffect(() => {
        if (movie){
            const genresSelected = getGenresPerMovie(apiGenres, movie?.genre_ids);
            setGenrePerMovie(genresSelected)
        };
    }, [apiGenres, getGenresPerMovie,movie])
    if(!movie) return null;

    return (
        <BookDetailsStyled>
            <StyledImageBookDetails alt={movie.title} src={`${moviePosterPathOrigin}/${movie.poster_path}`}/>
            <div>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <p><strong>Release date:</strong> {movie.release_date}</p>
                {genrePerMovie.map((genre: Genre) => {
                    return (
                        <Badge color={getRandomColorFromWord()}key={genre.id}>
                            {genre.name}
                        </Badge>
                    )
                })}
            </div>
        </BookDetailsStyled>
    )

}

export default MovieDetails
