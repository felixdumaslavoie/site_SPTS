// pages/404.js
import Head from 'next/head'
import styles from '../styles/textes.module.scss'
import { useEffect, useCallback } from 'react'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'

export default function Textes(){
  var Logo = undefined;
  var endOfDocumentTop = undefined;
  var size = undefined;

  const logoThing = useCallback( () => {
    var prevScrollpos = window.pageYOffset;
    if (Logo === undefined || endOfDocumentTop === undefined || size === undefined) {
      Logo = document.getElementById("logo");
      Logo.classList.add("apparition");
      endOfDocumentTop = 150;
      size = 0;
    }

    var navBar = document.getElementById("navbar");
    navBar.classList.add("special");
    
    
    window.onscroll = function () {
      let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      if (size == 0 && scroll > endOfDocumentTop) {
        Logo.className = 'smallLogo';
        Logo.classList.add("apparition");
        size = 1;
      } else if (size == 1 && scroll <= endOfDocumentTop) {
        Logo.className = 'largeLogo';
        Logo.classList.add("apparition");
        size = 0;
      }
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        navBar.classList.remove("hide");
        
      } else {
        navBar.classList.add("hide");
        Logo.className = 'smallLogo';
      }
      prevScrollpos = currentScrollPos;
    };
  },[])


  
  useEffect(() => {
    window.$ = window.jQuery = require('jquery');
    window.MarkdownIt = require('markdown-it');
    try{

    }
    catch(err){
        console.log(err);
    }
   
  }, []);

  

  return (
    
    <>
      <div className={styles.container}>
        <Head>
          <title>Collectif SPTS: 404 not found</title>
          <meta name="robots" content="noindex"/>
          <meta property="og:title" content="Collectif SPTS: Erreur 404" />
          <meta property="og:url" content="https://collectifspts.org/404" />
          <meta property="og:image" content="/thumbnails/appuis.jpg" />
          <meta property="og:type" content="article" />
          <meta property="og:description" content="Erreur 404: Impossible de trouver la page" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Collectif un salaire pour toustes les stagiaires" />
        </Head>

        <main className={styles.main}>
          <Navbar/>
          <header className='header_subsections_center'>
            <h1 id='txtTitre' className={styles.headerTitre}>
              <span className='detail_color'>Ce contenu n'est pas disponible...</span>
            </h1>
            <p id='txtDate' className={styles.headerDate}></p>
          </header>

          <section className={styles.autrices}>
          <h5>
              <ul id='txtAutrices'>
                
              </ul>
          </h5>
          </section>

          <section id='texteContenu' className={styles.leTexte}>
          </section>



        </main>

      <Footer/>
      </div>
    </>)
}

