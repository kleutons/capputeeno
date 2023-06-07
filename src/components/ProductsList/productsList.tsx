'use client'

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./productCard";
import { BtnPages, ListCardContainer, PaginationContainer } from "./productsStyled";
import { PrevIcon } from "@/icons/prev-icon";
import { NextIcon } from "@/icons/next-icon";
import { useState } from "react";
import { Product } from "@/types/productsResponse";


export function ProductsList(){
    const { data } = useProducts();
    const [currentPage, setCurrentPage] = useState(1);
    

     


    if (!data || data.length === 0) {
        return(
            <ListCardContainer>
                <p>Produto(s) não encontrado(s).</p>
            </ListCardContainer>
        )
    }else{

        const itemsPerPage = 12; // número de itens exibidos por página
        const totalItens = data.length;
        const totalPages = Math.ceil(totalItens / itemsPerPage);

        // Lógica para cálculo do índice inicial e final dos itens exibidos na página atual
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

        // Função para atualizar a página atual
        const paginate = (pageNumber:number) => {
            if( pageNumber >= 1 && pageNumber <= totalPages ){
                setCurrentPage(pageNumber);
            } 
        };

        return(
            <>
            <PaginationContainer className="container">
                <div>
                {Array.from({ length: totalPages }).map((_, index) => (
                <BtnPages 
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={currentPage === index + 1 ? "active" : ""}
                     >{index+1}</BtnPages>
                ))}
    
                </div>
                <div>
                    <BtnPages onClick={() => paginate(currentPage - 1)} ><PrevIcon /></BtnPages>
                    <BtnPages onClick={() => paginate(currentPage + 1)}><NextIcon /></BtnPages>
                </div>
            </PaginationContainer>
            <ListCardContainer className="container">
                {currentItems.map( (product:Product) => 
                <ProductCard 
                key={product.id}
                title={product.name} 
                price={product.price_in_cents}
                image={product.image_url}
                id={product.id}
                />)}
            </ListCardContainer>
            </>
    
        )

        
    }

    

}