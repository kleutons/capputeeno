'use client'

import { BackButton } from "@/components/Buttons/BackButton";
import { ContainerProduct, ProductInfor } from "./productStyled";
import { useProduct } from "@/hooks/useProduct";
import { formatPrice } from "@/utils/formatPrice";
import { ShopBagIcon } from "@/icons/shop-bag-icon";
import { useContext, useState } from "react";
import { Modal } from "@/components/Modal/modal";
import { CartContext } from "@/contexts/cartContext";
import { ProductCartAdd } from "@/types/productsResponse";


export default function Product({searchParams}: {searchParams: { id: string}}){
    const { data } = useProduct(searchParams.id);



    const [ open, setOpen ] = useState(false);

    const openModal = () => {
        setOpen(!open);
    }

    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        const item: ProductCartAdd = {
            id: data?.id || '',
            name: data?.name || '',
            image_url: data?.image_url || '',
            price_in_cents: data?.price_in_cents || 0,
            description: data?.description || '',
          };
        addToCart(item);
    };

    return(
        <ContainerProduct className="container">

            <Modal isopen={open} setopen={setOpen} />

            <BackButton navigate="/" />
            <section>
                <img src={data?.image_url} alt="imgProtuct"/>

                <div>
                    <ProductInfor>
                        <span>{data?.category}</span>
                        <h2>{data?.name}</h2>
                        <span>{formatPrice(data?.price_in_cents || 0)}</span>
                        <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
                        <div>
                            <h3>Descrição</h3>
                            <p>{data?.description}</p>
                        </div>
                    </ProductInfor>
                    <button onClick={() => {
                         handleAddToCart();
                          openModal();}}> 
                        <ShopBagIcon />
                         Adicionar ao carrinho
                    </button>
                </div>
            </section>
        </ContainerProduct>
    )
}