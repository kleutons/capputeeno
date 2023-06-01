'use client'

import styles from './page.module.css'
import { FilterBar } from '@/components/FilterBar/filterBar'
import { ProductsList } from '@/components/ProductsList/productsList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 


export default function Home() {

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <FilterBar />
        <ProductsList />
      </main>
    </QueryClientProvider>

  )
}
