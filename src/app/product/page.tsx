'use client'
export const dynamic = 'force-dynamic'; 
import { BackButton } from "@/components/Buttons/BackButton";
import { ContainerProduct, ProductInfor } from "./productStyled";
import { useProduct } from "@/hooks/useProduct";
import { formatPrice } from "@/utils/formatPrice";
import { ShopBagIcon } from "@/icons/shop-bag-icon";
import { useContext, useState } from "react";
import { Modal } from "@/components/Modal/modal";
import { CartContext } from "@/contexts/cartContext";
import { ProductCartAdd } from "@/types/productsResponse";
import Image from 'next/image';

export default function Product({searchParams}: {searchParams: { id: string}}){

    const { data } = useProduct(searchParams.id || 'null');

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

    if(!data) 
    return(
        <ContainerProduct className="container">
            <BackButton navigate="/" />
            Produto nao Encontrado!
        </ContainerProduct>
     ) 

    return(
        <ContainerProduct className="container">

            <Modal isopen={open} setopen={setOpen} />

            <BackButton navigate="/" />
            <section>
                <Image src={data?.image_url} alt="imgProtuct" width={640} height={500}/>

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