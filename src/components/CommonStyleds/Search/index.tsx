import React from 'react'
import { Search as SearchIcon } from "react-feather";
import {StyledLegend,SearchContainerStyled,StyledInput,SearchIconStyled} from './Search.styled'

export interface SearchProps {
    legend?: string;
    size?: string;
    onChange(...args:any[]):void;
    value:string;
    placeholder:string;
}


const Search = ({ legend, size = "l", ...props }: SearchProps) => {
    return (
        <>
            {legend && <StyledLegend as="label">{legend}</StyledLegend>}
            <SearchContainerStyled>
                <SearchIconStyled><SearchIcon size="18px" /></SearchIconStyled>
                <StyledInput {...props as any} />
            </SearchContainerStyled>
        </>
    )
}

export default Search
