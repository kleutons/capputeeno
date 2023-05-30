import { FilterContainer } from "./filterBar-Styled";
import { FilterByPriority } from "./filterByPriority";
import { FilterByType } from "./filterByType";

interface FilterBarProps{

}

export function FilterBar(props: FilterBarProps){

    return(
        <FilterContainer className="container">
            <FilterByType />
            <FilterByPriority />
        </FilterContainer>
    )
}