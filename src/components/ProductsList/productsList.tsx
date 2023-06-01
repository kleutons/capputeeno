'use client'

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./productCard";
import { ListCardContainer } from "./productsStyled";


export function ProductsList(){
    const { data } = useProducts();

    if (!data || data.length === 0) {
        return(
            <ListCardContainer>
                <p>Produto(s) não encontrado(s).</p>
            </ListCardContainer>
        )
    }

    return(
    
        <ListCardContainer className="container">
            {data?.map(product => 
            <ProductCard 
            key={product.id}
            title={product.name} 
            price={product.price_in_cents}
            image={product.image_url}
            />)}
        </ListCardContainer>

    )

}