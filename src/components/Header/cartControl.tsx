"use client"

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { CartIcon } from '../../icons/cart-icon'
import * as S from './cartControlStyled'

export function CartControl(){
    const { value } = useLocalStorage('cart-items', []);

    return (
        <S.Container>
            <CartIcon />
            {value.length > 0 && <S.CartCount>{value.length}</S.CartCount>}
        </S.Container>
    )
}