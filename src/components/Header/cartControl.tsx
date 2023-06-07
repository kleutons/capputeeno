"use client"

import { CartIcon } from '../../icons/cart-icon'
import { useRouter } from "next/navigation";
import * as S from './cartControlStyled'
import { useCartLocal } from '@/hooks/userCartLocal';

export function CartControl(){

    const { cartItems } = useCartLocal();
    
    const router = useRouter();

    return (
        <S.Container onClick={() => router.push('/cart')} >
            <CartIcon />
            {cartItems.length > 0 && <S.CartCount>{cartItems.length}</S.CartCount>}
        </S.Container>
    )
}