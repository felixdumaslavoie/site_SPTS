import Head from 'next/head'
import styles from '../../styles/textes.module.scss'
import Link from 'next/link'
import { useEffect, useCallback } from 'react'
import Script from 'next/script'

const fetcher = (...args) => fetch(...args).then(res => res.json());


export default function Textes(){
  var Logo = undefined;
  var endOfDocumentTop = undefined;
  var size = undefined;

  const logoThing = useCallback( () => {
    if (Logo === undefined || endOfDocumentTop === undefined || size === undefined) {
      Logo = document.getElementById("logo");
      endOfDocumentTop = 150;
      size = 0;
    }
    
    window.onscroll = function () {
      let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      if (size == 0 && scroll > endOfDocumentTop) {
        Logo.className = 'smallLogo';
        size = 1;
      } else if (size == 1 && scroll <= endOfDocumentTop) {
        Logo.className = 'largeLogo';
        size = 0;
      }
    };
  },[])

  const fetchIndexData = useCallback(async () => {
    const data = await fetch('https://collectifspts.org/dynamicDataSPTS/textes/index/index.json').then(response => {
      if (!response.ok) {
          throw new Error("HTTP error " + response.status);
      }
      return response.json();
      })
    return data;
  },[])

  const fetchTextData = useCallback(async (url) => {
    const data = await fetch('https://collectifspts.org/dynamicDataSPTS/textes/' + url + ".md").then(response =>{
      return response.blob();
      }).then( blob => {return blob.text()});
    return data;
  },[])


  
  useEffect(() => {
    window.$ = window.jQuery = require('jquery');
    window.MarkdownIt = require('markdown-it');


    fetchIndexData().catch(console.error).then((index)=>{
      console.log(index);

      let url = window.location.pathname.split('/')[2];
      
      if (!index.url.includes(url)) // Si le texte n'est pas présent dans l'index... On retourne à la page des textes et on affiche un petit message...
      {
        window.location.replace("../textes");
      }
      let idx = index.url.indexOf(url);
      
      fetchTextData(url).catch(console.error).then((txt) =>{
        let titre = index.titre[idx];
        let autrices = index.autrices[idx].split(';')
        let date = index.date[idx];
        $('#txtTitre').html(titre);

        let lesAutrices = "";
        autrices.forEach(element => lesAutrices += ("<li>" + element + "</li>"));
        $('#txtAutrices').html(lesAutrices)
        $('#txtDate').html("Publié le " + date);
        
        let md = new MarkdownIt();
        let result = md.render(txt);
        $('#texteContenu').html(result);
        $('#texteContenu a').attr('target','_blank');
      })
    });

    logoThing();
   
  
  }, [logoThing, fetchIndexData, fetchTextData]);

  

  return (
    
    <>
      <Script id="texts.js" strategy="afterInteractive">
        {`
        console.log(window.location.pathname.split('/')[2]);
        `}
      </Script>

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

