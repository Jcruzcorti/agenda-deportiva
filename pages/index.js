import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@components/styles/Home.module.css'
import PageLayOut from './components/layout/PageLayOut'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (

    <PageLayOut tittle='Agenda Deportiva'>
      <main className={styles.main}>
        <h1 className={styles.h1}> AGENDA DEPORTIVA JC</h1>
      </main>
    </PageLayOut>
  )
}
