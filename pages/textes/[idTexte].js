import Head from 'next/head'
import styles from '../../styles/indexTextes.module.scss'
import Navbar from '../../comps/Navbar'
import Footer from '../../comps/Footer'
import { useEffect, useCallback } from 'react'
import { fetchAPI } from "../../lib/api";

export default function Texte(){
    var Logo = undefined;
    var endOfDocumentTop = undefined;
    var size = undefined;
  
    const fetchIndexData = useCallback(async () => {
      const data = await fetch('https://collectifspts.org/dynamicDataSPTS/textes/index/index.json').then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
        })
      return data;
    },[])
  
    useEffect(() => {
      window.$ = window.jQuery = require('jquery');
      
      if (Logo === undefined || endOfDocumentTop === undefined || size === undefined ) {
        Logo = document.getElementById("logo");
        endOfDocumentTop = 0;
        size = 0;
      }
      
      let select = document.getElementById("id_textes");
      select.classList.add("selected");
  
      fetchIndexData().catch(console.error).then((index)=>{ 
  
        
        for(let i=0; i< index.id.length; i++)
        {
          $(".listeTxts").append("<li><a href="+ "textes/" + index.url[i] +">"+index.titre[i] +"</a></li>");
        }
  
      });
  
      window.onscroll = function() {
        let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      
        if (size == 0 && scroll > endOfDocumentTop) {
          Logo.className = 'smallLogo';
          size = 1;
        } else if(size == 1 && scroll <= endOfDocumentTop){
          Logo.className = 'largeLogo';
         size = 0;
        }};
  
    }, [fetchIndexData]);
    
  
  
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


  export async function getStaticProps() {
    // Run API calls in parallel
    let url;
    const [texteRes] = await Promise.all([
      fetchAPI("/textes?filters[Url]=" + url, { })
    ]);
  
    return {
      props: {
        texte: texteRes.data
      },
      revalidate: 1,
    };
  }
  