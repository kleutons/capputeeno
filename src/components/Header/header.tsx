import { LogoIcon } from '@/icons/logoIcon';
import { HeaderSearchInput } from '../Inputs/headerSearch';
import { CartControl } from './cartControl';
import * as S from './headerStyled';

import { Saira_Stencil_One } from 'next/font/google'

const sairaStencil = Saira_Stencil_One({ 
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap'
 })


interface HeaderProps{

}


export function Header(props:HeaderProps){
    return( 
        <S.TagHeader>
            
            <div className='container'>
        
                <S.Logo className={sairaStencil.className} href='/'> 
                capputeeno
                </S.Logo>
     
                <div className='container-input'>
                    <HeaderSearchInput
                    placeholder='Procurando por algo específico?' />
                    <CartControl />
                </div>
            </div>
        </S.TagHeader>
    )
}