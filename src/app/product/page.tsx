'use client'

import { BackButton } from "@/components/Buttons/BackButton";
import { ContainerProduct, ProductInfor } from "./productStyled";
import { useProduct } from "@/hooks/useProduct";
import { formatPrice } from "@/utils/formatPrice";
import { ShopBagIcon } from "@/icons/shop-bag-icon";

export default function Product({searchParams}: {searchParams: { id: string}}){
    const { data } = useProduct(searchParams.id)

    const handleAddToCart = () => {
        const bdLocalStorage = 'cart-items';
        console.log(bdLocalStorage);

        let cartItems = localStorage.getItem(bdLocalStorage);
        if(cartItems){
            let cartItemsArray = JSON.parse(cartItems);

            let existingProductIdex = cartItemsArray.findIndex( (item: {id: string} ) => item.id == searchParams.id)

            if(existingProductIdex != -1){
                cartItemsArray[existingProductIdex].quantity += 1;
            }else{
                cartItemsArray.push({ ...data, quantity: 1})
            }

            localStorage.setItem(bdLocalStorage, JSON.stringify(cartItemsArray))

        }else{
            const newCart  = [
                {
                    ...data,
                    quantity: 1
                }
            ];

            localStorage.setItem(bdLocalStorage, JSON.stringify(newCart))
        }

    }

    return(
        <ContainerProduct className="container">
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
                    <button onClick={handleAddToCart}> 
                        <ShopBagIcon />
                         Adicionar ao carrinho
                    </button>
                </div>
            </section>
        </ContainerProduct>
    )
}