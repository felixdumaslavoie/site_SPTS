import Head from 'next/head'
import styles from '../../styles/evenements.module.scss'
import Link from 'next/link'
import Script from 'next/script'

export default function Evenements() {
  return (
    <>
    <Script
      src="/scripts/main.js"
      onLoad={() => {
        window.onscroll = function() {
          growShrinkLogo()
        };
      }}
    />
<div className={styles.container}>
      <Head>
        <title>Collectif SPTS: Les évenements organisés par le collectif</title>
        <meta name="description" content="Collectif un salaire pour toustes les stagiaires" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div className='mainMenu'>
          <ul>
            <li><Link href="/"><a><div id='logo'></div></a></Link></li>
            <li className='detail_color'>
              <Link href="/">
                <a>Accueil</a>
              </Link></li>
              <li className='sub1_color'>
              <Link href="/materiel">
                <a>Matériel</a>
              </Link></li>
            <li className='nice_color'><Link href="/historique">
                <a>Historique</a>
              </Link></li>
            <li className='sub1_color'><Link href="/evenements">
                <a className='selected'>Évenements</a>
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
        <header className='header_subsections_center'>
        <h1 className='headerh1blue'>

        <div className='header_underline'>
          <span>É</span>
          <span>v</span>
          <span>e</span>
          <span>n</span>
          <span>e</span>
          <span>m</span>
          <span>e</span>
          <span>n</span>
          <span>t</span>
          <span>s</span>
        </div>
        </h1>
        <h5>
          en cours d&apos;<div className='header_underline'>organisation!</div> 
        </h5>
        </header>

        <section>
        <h6 className='hidden'>Work in progress</h6>
        <p>Api en développement... :)</p>
      </section>


       
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
    </>)
}