'use client'

import styles from './page.module.css'
import { FilterBar } from '@/components/FilterBar/filterBar'
import { ProductsList } from '@/components/ProductsList/productsList';

export default function Home() {
  return (
      <main className={styles.main}>
        <FilterBar />
        <ProductsList />
      </main>
  )
}
