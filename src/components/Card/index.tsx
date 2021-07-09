import { Movie } from "modules/Movies/types";
import {
  CardContent,
  CardContentContainer,
  CardImage,
  CardImageContainer,
  CardStyled,
} from "./Card.styled";


interface CardProps {
    onClick(movie: Movie): void;
    movie: Movie;
}


const Card = ({
    onClick,
    movie
}: CardProps) => {
    const moviePosterPathOrigin = `${process.env.REACT_APP_API_IMAGES_URL}w220_and_h330_face`
    return (
        <CardStyled>
            <CardImageContainer>
                <CardImage onClick={() => onClick(movie)} src={`${moviePosterPathOrigin}/${movie.poster_path}`} />
            </CardImageContainer>
            <CardContentContainer>
                <CardContent>
                    <strong>{movie.title}</strong>
                </CardContent>
            </CardContentContainer>
        </CardStyled>
    );
};

export default Card;
