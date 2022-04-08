import Head from 'next/head'
import styles from '../../styles/textes.module.scss'
import Navbar from '../../comps/Navbar'
import Footer from '../../comps/Footer'
import { useEffect, useCallback } from 'react'


export default function Texte(){
  var Logo = undefined;
  var endOfDocumentTop = undefined;
  var size = undefined;


  useEffect(() => {
    if (Logo === undefined || endOfDocumentTop === undefined || size === undefined ) {
      Logo = document.getElementById("logo");
      endOfDocumentTop = 0;
      size = 0;
    }
    
    let select = document.getElementById("id_textes");
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
              <title>Collectif SPTS: Textes</title>
              <meta property="og:title" content="Collectif SPTS: Textes" />
              <meta property="og:url" content="https://collectifspts.org/textes/" />
              <meta property="og:image" content="/thumbnails/appuis.jpg" />
              <meta property="og:type" content="article" />
              <meta property="og:description" content="Organismes qui appuient la salarisation" />
              <link rel="icon" href="/favicon.ico" />
              <meta name="description" content="Collectif un salaire pour toustes les stagiaires" />
            </Head>
    
            <main className={styles.main}>

              <Navbar/>

              <header className='header_subsections_center'>
                <h1 id='txtTitre' className={styles.headerTitre}>
                  <span className='detail_color'>Chargement...</span>
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