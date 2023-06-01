'use client'

import { FilterBar } from '@/components/FilterBar/filterBar'
import { ProductsList } from '@/components/ProductsList/productsList';
import { Main } from './pageStyled';

export default function Home() {
  return (
      <Main>
        <FilterBar />
        <ProductsList />
      </Main>
  )
}
