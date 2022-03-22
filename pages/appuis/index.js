import Head from 'next/head'
import styles from '../../styles/appuis.module.scss'
import Link from 'next/link'
import Script from 'next/script'

export default function Appuis() {
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
        <title>Collectif SPTS: organismes appuyant notre lutte</title>
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
                <a>Évenements</a>
              </Link></li>
            <li className='nice_color'><Link href="/archives">
                <a>Archives</a>
              </Link></li>
            <li className='sub1_color'><Link href="/appuis">
                <a className='selected'>Appuis</a>
              </Link></li>
            <li className='detail_color'><Link href="/contact">
                <a>Contact</a>
              </Link></li>
          </ul>
        </div>
        <header className='header_subsections_right'>
        <h1 className='headerh1blue'>

        <div className='header_underline'>
          <span>A</span>
          <span>p</span>
          <span>p</span>
          <span>u</span>
          <span>i</span>
          <span>s</span>
        </div>
        </h1>
        <h5>
          organismes qui appuient la <div className='header_underline'>salarisation</div> 
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
    </>)
}