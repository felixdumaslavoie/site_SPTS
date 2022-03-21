import Head from 'next/head'
import styles from '../../styles/materiel.module.scss'
import Link from 'next/link'

export default function Historique() {
  return (
<div className={styles.container}>
      <Head>
        <title>Collectif SPTS: Historique de la lutte en cours...</title>
        <meta name="description" content="Collectif un salaire pour toustes les stagiaires" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div className='mainMenu'>
          <ul>
            <li className='detail_color'>
              <Link href="/">
                <a>Accueil</a>
              </Link></li>
              <li className='sub1_color'>
              <Link href="/materiel">
                <a>Matériel</a>
              </Link></li>
            <li className='nice_color'><Link href="/historique">
                <a className='selected'>Historique</a>
              </Link></li>
            <li className='sub1_color'><Link href="/evenements">
                <a>Évenements</a>
              </Link></li>
            <li className='nice_color'><Link href="/archives">
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
        <header className='header_subsections_right'>
        <h1 className='headerh1blue'>

        <div className='header_underline'>
          <span>H</span>
          <span>i</span>
          <span>s</span>
          <span>t</span>
          <span>o</span>
          <span>r</span>
          <span>i</span>
          <span>q</span>
          <span>u</span>
          <span>e</span>
        </div>
        </h1>
        <h5>
          ...de ce qui s&apos;est déjà <div className='header_underline'>organisé</div> 
        </h5>
        </header>



       
      </main>

      <footer className='footer'>
        <ul>
          <li><a href="https://www.facebook.com/collectif.spts" target="_blank" rel="noopener noreferrer">Collectif SPTS</a></li>
          <li>-</li>
          <li>2022</li>
        </ul>
        <ul>
          <li>Site web réalisé par</li>
          <li><span>-</span></li>
          <li><a href="https://github.com/felixdumaslavoie" target="_blank" rel="noopener noreferrer">Félix D-L</a></li>
        </ul>
      </footer>
    </div>
  )
}