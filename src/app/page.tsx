import styles from './page.module.css'
import { FilterBar } from '@/components/FilterBar/filterBar'

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterBar />
    </main>
  )
}
