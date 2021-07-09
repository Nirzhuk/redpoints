import React from 'react'
import rangeMap from 'core/libs/utils/rangeMap';
import Card from '..';
import Skeleton from 'components/CommonStyleds/Skeleton';
import { Movie } from 'modules/Movies/types';


interface GridCardProps {
    data: Movie[]
    onClickCard(movie:Movie):void;
}

const CardGrid = ({ data, onClickCard }: GridCardProps) => {
    return <>{data ? (
        data.map((movie: Movie) => <Card
            key={movie.id}
            onClick={onClickCard}
            movie={movie}
             />)
    ) : (rangeMap<React.ReactNode>(20, (i) => (
        <Skeleton
            height="350px"
            key={i}
        />
    )))}</>
};

export default React.memo(CardGrid)
