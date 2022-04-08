import Head from 'next/head'
import styles from '../../styles/evenements.module.scss'
import Link from 'next/link'
import { useEffect } from 'react'
import Navbar from '../../comps/Navbar'
import Footer from '../../comps/Footer'

export default function Evenements() {
  var Logo = undefined;
  var endOfDocumentTop = undefined;
  var size = undefined;

  useEffect(() => {
    if (Logo === undefined || endOfDocumentTop === undefined || size === undefined ) {
      Logo = document.getElementById("logo");
      endOfDocumentTop = 150;
      size = 0;
    }

    let select = document.getElementById("id_events");
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
        <title>Collectif SPTS: Les évenements organisés par le collectif</title>
        <meta property="og:title" content="Collectif SPTS: Évenements" />
        <meta property="og:url" content="https://collectifspts.org/evenements"/> 
        <meta property="og:image" content="/thumbnails/evenements.jpg"/>
        <meta property="og:type" content="website"/>  
        <meta property="og:description" content="Évenements en cours d'organisation par le collectif"/> 
        <meta name="description" content="Les évenements organisés par le collectif SPTS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar/>
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

    <Footer/>
    </div>
    </>)
}