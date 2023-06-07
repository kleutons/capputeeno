'use client'

import { ProductsFetchResponse } from "@/types/productsResponse";
import { FilterQueryID } from "@/utils/filterQuery";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = 'https://kleutons.github.io/store-api/db.json' as string;

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
    return axios.get(API_URL);
}


export function useProduct(id: string){
    const { data } = useQuery({
        queryFn: () => fetcher(),
        queryKey: ['product', id],
        enabled: !!id,
        staleTime: 1000 * 60 * 5
    });

    const dataReturn = data?.data?.allProducts;

    const filterID = FilterQueryID(dataReturn, id);

    return{
        data: filterID
    }
}