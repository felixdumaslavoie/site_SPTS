import Head from 'next/head'
import styles from '../../styles/materiel.module.scss'
import Link from 'next/link'

export default function Materiel() {
  return (
<div className={styles.container}>
      <Head>
        <title>Collectif SPTS: Matériel</title>
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
                <a className='selected'>Matériel</a>
              </Link></li>
            <li className='nice_color'><Link href="/historique">
                <a>Historique</a>
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
        <header className='header_subsections'>
        <h1 className='headerh1blue'>

        <div className='header_underline'>
          <span>M</span>
          <span>a</span>
          <span>t</span>
          <span>é</span>
          <span>r</span>
          <span>i</span>
          <span>e</span>
          <span>l</span>
        </div>
        </h1>
        <h5>
          Matériel produit par le <div className='header_underline'>collectif</div> 
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