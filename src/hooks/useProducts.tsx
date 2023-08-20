import { ProductsFetchResponse } from "@/types/productsResponse";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./userFilter";
import { useDeferredValue } from "react";
import { FilterQueryPriority, FilterQueryType, FilterSearch } from "@/utils/filterQuery";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(
        API_URL,
        {
            "query": `query{
                 allProducts 
                        {
                            id  
                            name 
                            image_url
                            price_in_cents 
                            category
                            sales
                            created_at
                        } 
                    }`
        });
}


export function useProducts(){
    const { type, priority, search } = useFilter();

    const searchDeferred = useDeferredValue(search);

    const { data } = useQuery({
        queryFn: fetcher,
        queryKey: ['products', type],
        staleTime: 1000 * 60 * 1
    });



    
    const dataReturn = data?.data.data.allProducts;
    
    const filter = FilterQueryType(dataReturn, type);

    const order = FilterQueryPriority(filter, priority);

    const searchFor = FilterSearch(order,searchDeferred);

    return {
        data: searchFor
    }
}