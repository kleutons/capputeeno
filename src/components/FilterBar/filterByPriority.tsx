'use client'

import { useState } from "react";
import { ArrowIcon } from "../../icons/arrow-icon";
import { PriorityFilter, PriorityFilterContainer } from "./filterBar-Styled";
import { useFilter } from "@/hooks/userFilter";
import { PriorityTypes } from "@/types/priorityTypes";

interface FilterByPriorityProps {

}

export function FilterByPriority(props: FilterByPriorityProps){
    const [isOpen, setIsOpen] = useState(false);
    const { setPriority } = useFilter();

    const handleOpen = () => setIsOpen(prev => !prev);

    const handleUpdadePriority = (value: PriorityTypes) => {
        setPriority(value);
        setIsOpen(false);
    }


    return(
        <PriorityFilterContainer>
            <button onClick={handleOpen}>
                Organizar por:
                <ArrowIcon />    
            </button>

            {
            isOpen &&  
            <PriorityFilter>
                <li onClick={() => handleUpdadePriority(PriorityTypes.NEWS)}>Novidades</li>
                <li onClick={() => handleUpdadePriority(PriorityTypes.BIG_PRICE)}>Preço: Maior - menor</li>
                <li onClick={() => handleUpdadePriority(PriorityTypes.LOW_PRICE)} >Preço: Menor - maior</li>
                <li onClick={() => handleUpdadePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
            </PriorityFilter>
            }

        </PriorityFilterContainer>
    )

}