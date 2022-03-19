import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/principale.module.scss'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Collectif SPTS: un salaire pour toustes les stagiaires!</title>
        <meta name="description" content="Collectif un salaire pour toustes les stagiaires" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className='mainMenu'>
          <ul>
            <li className='detail_color'>
              <Link href="/">
                <a className='selected'>Accueil</a>
              </Link></li>
              <li className='sub1_color'>
              <Link href="/materiel">
                <a>Matériel</a>
              </Link></li>
            <li className='feminist_color'><Link href="/historique">
                <a>Historique</a>
              </Link></li>
            <li className='sub1_color'><Link href="/evenements">
                <a>Évenements</a>
              </Link></li>
            <li className='feminist_color'><Link href="/archives">
                <a>Archives</a>
              </Link></li>
            <li className='sub1_color'><Link href="/appuis">
                <a>Appuis</a>
              </Link></li>
            <li className='detail_color'><Link href="/contact">
                <a>Contact</a>
              </Link></li>
          </ul>
        </div>
        <header className='header'>
        <h1 className={styles.title}>

        <div className='header_underline'>
          <span>C</span>
          <span>o</span>
          <span>l</span>
          <span>l</span>
          <span>e</span>
          <span>c</span>
          <span>t</span>
          <span>i</span>
          <span>f</span>
        </div>
          <span> </span>
          <span>S</span>
          <span>P</span>
          <span>T</span>
          <span>S</span>
          <span> </span>
        </h1>
        <h3>
          Un salaire pour toustes les <div className='header_underline'>stagiaires!</div> 
        </h3>
        </header>



       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
