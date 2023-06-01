'use client'
import { InputHTMLAttributes } from "react";
import { SearchIcon } from "../../icons/search-icon";
import * as S from "./headerSearchStyled";
import { useFilter } from "@/hooks/userFilter";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
}

export function HeaderSearchInput(props: InputProps){
    const { setSearch } = useFilter();

    return(
        <S.SearchContainer>
            <S.SearchInput onChange={(e) => setSearch(e.target.value)}  {...props}/>
            <SearchIcon/>
        </S.SearchContainer>
    )
}