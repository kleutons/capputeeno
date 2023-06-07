
'use client'

import { CartContext } from '@/contexts/cartContext';
import { useContext } from 'react';

export function useCartLocal(){    
    return useContext(CartContext);
}