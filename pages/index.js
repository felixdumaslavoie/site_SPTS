import Head from 'next/head'
import styles from '../styles/principale.module.scss'
import { useEffect } from 'react'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'



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
        
        <Navbar/>

        <header className='header'>
        <h1 className={styles.title}>

        <div className='header_underline'>
          <span>Collectif</span>
        </div>
        <div className='header_mauve'>
          <span> </span>
          <span>SPTS</span>
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

      <Footer/>

    </div>
    </>)
}
