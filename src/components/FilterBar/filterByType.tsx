'use client';

import { useFilter } from "@/hooks/userFilter"
import { FilterItem, FilterList } from "./filterBar-Styled"
import { FilterType } from "@/types/filterTypes";


export function FilterByType(){
    const { type, setType } = useFilter();

    const handleChangeType = ( value: FilterType ) => {
        setType(value);
    }

    return(
        <FilterList>
            <FilterItem 
            active={type == FilterType.ALL} 
            onClick={() => handleChangeType(FilterType.ALL)}>
                Todos os produtos
            </FilterItem>
            <FilterItem 
            active={type == FilterType.SHIRT} 
            onClick={() => handleChangeType(FilterType.SHIRT)}>
                Camisetas
            </FilterItem>
            <FilterItem 
            active={type == FilterType.MUG} 
            onClick={() => handleChangeType(FilterType.MUG)}>
                Canecas
            </FilterItem>
        </FilterList>
    )
}