import Head from 'next/head'
import styles from '../../styles/indexTextes.module.scss'
import Navbar from '../../comps/Navbar'
import Footer from '../../comps/Footer'
import { useEffect } from 'react'
import { fetchAPI } from "../../lib/api";

export async function getServerSideProps(context) {
  const { url } = context.query;
  let test = "?filters[Url]=le-combat-des-stagiaires-reprend";

  const [texteRes] = await Promise.all([
    fetchAPI("/textes?filters[Url]=le-combat-des-stagiaires-reprend", { test })
  ]);


  console.log(texteRes)

  return {
    props: {
      texte: texteRes.data
    }
    
  };
}


export default function Texte({texte}){
    var Logo = undefined;
    var endOfDocumentTop = undefined;
    var size = undefined;
  

  
    useEffect(() => {
      window.$ = window.jQuery = require('jquery');
      
      if (Logo === undefined || endOfDocumentTop === undefined || size === undefined ) {
        Logo = document.getElementById("logo");
        endOfDocumentTop = 0;
        size = 0;
      }
      
      let select = document.getElementById("id_textes");
      select.classList.add("selected");
     
      console.log(texte)
  
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
                    <span className='detail_color'>Index des textes</span>
                  </h1>
                </header>
      
                <section id='listeTextes' className={styles.listeTextes}>
                  <ul className='listeTxts'>
                  </ul>
                </section>
      
      
      
              </main>
  
              <Footer/>
            </div>
          </>)
  }


