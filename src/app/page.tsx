import Image from 'next/image'
import styles from './page.module.css'
import DataSheet from './data-sheet'

export default function Home() {
  return (
    <main className={styles.main}>
      <DataSheet />
    </main>
  )
}
