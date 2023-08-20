'use client'

import { ProductFetchResponse } from "@/types/productsResponse";
import { FilterQueryID } from "@/utils/filterQuery";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = 'https://capputeeno-api-vercel.vercel.app/api/graphql' as string;

const fetcher = (productId: string): AxiosPromise<ProductFetchResponse> => {
    return axios.post(API_URL,{query:`
        query{
            Product(id: "${productId}"){                
                id
                name
                image_url
                description
                category
                price_in_cents
            }
        }
    `});
}


export function useProduct(id: string){
    const { data } = useQuery({
        queryFn: () => fetcher(id),
        queryKey: ['product', id],
        enabled: !!id,
        staleTime: 1000 * 60 * 5
    });

    

    const dataReturn = data?.data.data.Product;

    return{
        data: dataReturn
    }
}