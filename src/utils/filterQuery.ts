import { FilterType } from "@/types/filterTypes";
import { PriorityTypes } from "@/types/priorityTypes";

export function  FilterQueryType( dataQuery:any, dataType:FilterType ){
    interface IProps{
        category: string
    }

    if (dataType !== FilterType.ALL && dataQuery) {

        let getType = (dataType === FilterType.MUG) ? 'mugs' : 't-shirts';
        
        dataQuery = dataQuery.filter(function (product:IProps) {
          return product.category === getType;
        });
    }
    return dataQuery;
}   

export function FilterQueryPriority( dataQuery:any, dataPriority:PriorityTypes ){
    
    

    if( dataPriority === PriorityTypes.NEWS && Array.isArray(dataQuery) ){
        dataQuery = dataQuery.sort((a:any,b:any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime() )
    }

    if( dataPriority === PriorityTypes.BIG_PRICE && Array.isArray(dataQuery) ){
        dataQuery = dataQuery.sort((a:any,b:any) => b.price_in_cents - a.price_in_cents)
    }

    if( dataPriority === PriorityTypes.LOW_PRICE && Array.isArray(dataQuery) ){
        dataQuery = dataQuery.sort((a:any,b:any) => a.price_in_cents - b.price_in_cents)
    }
    
    if( dataPriority === PriorityTypes.POPULARITY && Array.isArray(dataQuery) ){
        dataQuery = dataQuery.sort((a:any,b:any) => b.sales - a.sales )
    }

    
    return dataQuery;
}

export function FilterSearch( dataQuery:any, dataSearch:string ){

    interface IProps{
        name: string
    }

    if (dataQuery) {

        dataQuery = dataQuery.filter(
             (product:IProps) => product.name.toLocaleLowerCase().includes(dataSearch.toLocaleLowerCase())
        );

    }
    return dataQuery;
}