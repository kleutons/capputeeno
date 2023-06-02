'use client'

import { BackButton } from "@/components/Buttons/BackButton";
import { ContainerCartList, ContainerCart, CartList, ContainerCartResume, ResumeTotalItem, ResumeDivider } from "./cartStyled";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/productsResponse";
import { formatPrice } from "@/utils/formatPrice";
import { CartItem } from "./cartItem";
import { ShopButton } from "@/components/Buttons/ShopButton";



export default function CartPage(){

    const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>('cart-items', []);

    const calTotal = (value: ProductInCart[]) => {
        return value.reduce( (sum, item) => sum += (item.price_in_cents * item.quantity), 0);
    }

    const cartTotal = formatPrice(calTotal(value));
    const deliveryFee = 4000;
    const cartTotalDelivery = formatPrice(calTotal(value) + deliveryFee);

    const handleUpdateQuant = (id:string, quantity: number) => {
        const newValue = value.map(item => {
            if( item.id !== id ) return item
            return  { ...item, quantity: quantity}
        })
        console.log(newValue);
        updateLocalStorage(newValue)
    } 

    const handleDeleteItem = (id:string) => {
        const confirme = confirm("Deseja Exluir esse item do seu carrinho?");
        
        if(confirme){
            const newValue = value.filter(item => {
                if( item.id !== id ) return item 
            })
            updateLocalStorage(newValue)
        }
    }

    return(
        <ContainerCart className="container">
            <ContainerCartList>
            <BackButton navigate='/' />
                <h3>Seu carrinho</h3>
                <p>
                    Total {value.length} produtos 
                    <span>{cartTotal}</span>
                </p>
                <CartList>
                    {value.map(item => 
                        <CartItem 
                        product={item} 
                        key={item.id}
                        handleDelete={handleDeleteItem}
                        handleUpdateQuant={handleUpdateQuant}/> )}
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
                    <ShopButton  navigate="#" />
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