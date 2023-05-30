import { InputHTMLAttributes } from "react";
import { SearchIcon } from "../../icons/search-icon";
import * as S from "./header-search-styled";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function HeaderSearchInput(props: InputProps){
    return(
        <S.SearchContainer>
            <S.SearchInput {...props}/>
            <SearchIcon/>
        </S.SearchContainer>
    )
}