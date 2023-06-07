'use client'

import { BackButton } from "@/components/Buttons/BackButton";
import { ContainerCartList, ContainerCart, CartList, ContainerCartResume, ResumeTotalItem, ResumeDivider } from "./cartStyled";
import { ProductInCart } from "@/types/productsResponse";
import { formatPrice } from "@/utils/formatPrice";
import { CartItem } from "./cartItem";
import { ShopButton } from "@/components/Buttons/shopButton";
import { useCartLocal } from "@/hooks/userCartLocal";



export default function CartPage(){

    const { cartItems, removeFromCart, updateQuant } = useCartLocal();

    const calTotal = (valueList: ProductInCart[]) => {
        return valueList.reduce( (sum, item) => sum += (item.price_in_cents * item.quantity), 0);
    }

    const cartTotal = formatPrice(calTotal(cartItems));
    const deliveryFee = 4000;
    const cartTotalDelivery = formatPrice(calTotal(cartItems) + deliveryFee);

    if (!cartItems.length) {
        return (
            <ContainerCart className="container">
                <ContainerCartList>
                    <BackButton navigate='/' />
                        <h3>Seu carrinho está vazio</h3>
                        <p> Volte a página de produtos e adicione novos itens! </p>
                </ContainerCartList>
            </ContainerCart>
            )
    }

    return(
        <ContainerCart className="container">
            <ContainerCartList>
            <BackButton navigate='/' />
                <h3>Seu carrinho</h3>
                <p>
                    Total {cartItems.length} produtos 
                    <span>{cartTotal}</span>
                </p>
                <CartList>
                {cartItems.map((item) => (
                    <>
                    <CartItem 
                        key={item.id}
                        product={item}
                        handleDelete={() => removeFromCart(item)}
                        handleUpdateQuant={updateQuant}
                    />
                    </>
                ))}
          
                </CartList>
            </ContainerCartList>
            <ContainerCartResume>
                <div>
                    <h3>Resumo do pedido</h3>
                    <ResumeTotalItem>
                        <p>Subtotal de produtos</p>
                        <p>{cartTotal}</p>                    
                    </ResumeTotalItem>
                    <ResumeTotalItem>
                        <p>Entrega</p>
                        <p>{formatPrice(deliveryFee)}</p>                    
                    </ResumeTotalItem>
                    <ResumeDivider />
                    <ResumeTotalItem isBold>
                        <p>Total</p>
                        <p>{cartTotalDelivery}</p>                    
                    </ResumeTotalItem>
                    <ShopButton />
                </div>
                <ul>
                    <li>Ajuda</li>
                    <li>Reembolsos</li>
                    <li>entregas e frete</li>
                    <li>trocas e devoluções</li>
                </ul>
            </ContainerCartResume>
        </ContainerCart>
    )
}