import Head from 'next/head'
import styles from '../styles/principale.module.scss'
import Link from 'next/link'
import { useEffect } from 'react'
import { mainScript } from '../public/scripts/main'



export default function Home() {
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
        <title>Collectif SPTS: Un salaire pour toustes les stagiaires!</title>
        <meta property="og:title" content="Collectif SPTS: Un salaire pour toustes les stagiaires!"/>
        <meta property="og:url" content="https://collectifspts.org"/> 
        <meta property="og:image" content="/thumbnails/main.jpg"/>
        <meta property="og:type" content="website"/>  
        <meta name="description" content="Collectif SPTS: un salaire pour toustes les stagiaires!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <div className='mainMenu'>
        
          <ul>
            <li><Link href="/"><a><div id='logo'></div></a></Link></li>
            <li className='detail_color'>
              <Link href="/">
                <a className='selected'>Accueil</a>
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
        <div className='header_mauve'>
          <span> </span>
          <span>S</span>
          <span>P</span>
          <span>T</span>
          <span>S</span>
          <span> </span>
        </div>
        </h1>
        <h3>
          Un <span className='detail_color'>s</span>alaire <span className='nice_color'>p</span>our <span className='base_color'>t</span>oustes les <div className='header_underline'><span className='detail_color'>s</span>tagiaires!</div> 
        </h3>
        </header>

      <section>
        <h6 className='hidden'>Intro</h6>
        <p>Le collectif SPTS est un regroupement interrégional d’étudiant.e.s qui militent pour combattre les inégalités et les oppressions vécues par la classe étudiante, spécifiquement en lien avec le travail gratuit effectué en stage non salarié.</p>
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
