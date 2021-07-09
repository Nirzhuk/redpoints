import { FormEvent,useEffect, useState } from 'react';
import styled from 'styled-components';
import ModalFullPage from 'components/ModalFullPage';
import CardGrid from 'components/Card/Grid';
import Grid from 'components/CommonStyleds/Grid';
import Search from 'components/CommonStyleds/Search';
import MovieDetails from 'components/MovieDetails';
import { Movie } from 'modules/Movies/types';
import useDebounce from 'hooks/utils/useDebounce';
import useMovies from 'hooks/api/useMovies';
import useSearchMovies from 'hooks/api/useSearchMovies';
import { device } from 'core/libs/mediaQueries';

const SearchContainer = styled.div`
    margin: 0 auto;
    margin-top: 50px;
    @media ${device.laptop} {
        display:grid;
        width: 1400px;
    }
`;

const MainPage = () => {

    const [openModal, setOpenModal] = useState(false)
    const [movies, setMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState<null | Movie>(null)

    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedValue, setDebouncedValue] = useState('');
    const [,] = useDebounce(
        () => {
            setDebouncedValue(searchTerm);
        },
        1000,
        [searchTerm]
    );

    const [data] = useMovies();
    const [searchedData] = useSearchMovies(debouncedValue);

    const handleModal = (movie: Movie) => {
        setOpenModal(true);
        setSelectedMovie(movie)
    }
    useEffect(() => {
        setMovies(data);
    }, [data])

    useEffect(() => {
        setMovies(searchedData);
        if (debouncedValue === '') {
            setMovies(data)
        }
    }, [searchedData, data, debouncedValue])

    return (
        <>
            <ModalFullPage isOpen={openModal} onClose={() => setOpenModal(false)}> {openModal && <MovieDetails movie={selectedMovie} />} </ModalFullPage>
            <SearchContainer>
                <Search
                    onChange={({ currentTarget }: FormEvent<HTMLInputElement>) => {
                        setSearchTerm(currentTarget.value)
                    }}
                    value={searchTerm}
                    placeholder="Search by name"
                />
            </SearchContainer>
            <Grid id="CardGrid">
                <CardGrid onClickCard={handleModal} data={movies} />
            </Grid>
        </>
    )
}

export default MainPage
