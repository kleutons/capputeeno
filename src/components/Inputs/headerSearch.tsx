'use client'
import { InputHTMLAttributes } from "react";
import { SearchIcon } from "../../icons/search-icon";
import * as S from "./headerSearchStyled";
import { useFilter } from "@/hooks/userFilter";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: string;
}

export function HeaderSearchInput(props: InputProps){
    const { setSearch } = useFilter();
    
    const handleValue = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
    }

    return(
        <S.SearchContainer>
            <S.SearchInput onChange={handleValue}  {...props}/>
            <SearchIcon/>
        </S.SearchContainer>
    )
}