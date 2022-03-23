import Head from 'next/head'
import styles from '../../styles/materiel.module.scss'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Historique() {
  var Logo = undefined;
  var endOfDocumentTop = undefined;
  var size = undefined;

  useEffect(() => {
    if (Logo === undefined || endOfDocumentTop === undefined || size === undefined ) {
      Logo = document.getElementById("logo");
      endOfDocumentTop = 150;
      size = 0;
    }

    window.onscroll = function() {
      let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
      if (size == 0 && scroll > endOfDocumentTop) {
        Logo.className = 'smallLogo';
        size = 1;
      } else if(size == 1 && scroll <= endOfDocumentTop){
        Logo.className = 'largeLogo';
       size = 0;
      }};

  }, []);
  










  return (
    <>
<div className={styles.container}>
      <Head>
        <title>Collectif SPTS: Historique de la lutte en cours...</title>
        <meta property="og:title" content="Collectif SPTS: Évenements"/>
        <meta property="og:url" content="https://collectifspts.org/historique"/> 
        <meta property="og:image" content="/thumbnails/historique.jpg"/>
        <meta property="og:type" content="website"/>  
        <meta property="og:description" content="Historique de la lutte pour la salarisation des stages"/> 
        <meta name="description" content="Historique de la lutte pour la salarisation des stages" />
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
    </>)
}