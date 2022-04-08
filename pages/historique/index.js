import Head from 'next/head'
import styles from '../../styles/materiel.module.scss'
import Link from 'next/link'
import { useEffect } from 'react'
import Navbar from '../../comps/Navbar'
import Footer from '../../comps/Footer'

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

    let select = document.getElementById("id_historique");
    select.classList.add("selected");

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
        <Navbar/>
        <header className='header_subsections_right'>
        <h1 className='headerh1blue'>

        <div className='header_underline'>
          <span>Historique</span>
        </div>
        </h1>
        <h5>
          ...de ce qui s&apos;est déjà <div className='header_underline'>organisé</div> 
        </h5>
        </header>



       
      </main>

      <Footer/>
    </div>
    </>)
}