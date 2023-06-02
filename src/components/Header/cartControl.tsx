"use client"

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { CartIcon } from '../../icons/cart-icon'
import { useRouter } from "next/navigation";
import * as S from './cartControlStyled'

export function CartControl(){
    const { value } = useLocalStorage('cart-items', []);
    
    const router = useRouter();

    return (
        <S.Container onClick={() => router.push('/cart')} >
            <CartIcon />
            {value.length > 0 && <S.CartCount>{value.length}</S.CartCount>}
        </S.Container>
    )
}