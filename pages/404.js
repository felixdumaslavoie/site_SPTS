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
    try{

    }
    catch(err){
        console.log(err);
    }

    fetchIndexData().catch(console.error).then((index)=>{

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
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let dateTxt = new Date(date);
        let dateModif = dateTxt.toLocaleDateString('fr-CA', options)
        $('#txtTitre').html(titre);

        let lesAutrices = "";
        autrices.forEach(element => lesAutrices += ("<li>" + element + "</li>"));
        $('#txtAutrices').html(lesAutrices)
        $('#txtDate').html("Publié le " + dateModif);
        
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
      <div className={styles.container}>
        <Head>
          <title>Collectif SPTS: Textes</title>
          <meta property="og:title" content="Collectif SPTS: Textes" />
          <meta property="og:url" content="https://collectifspts.org/texte/" />
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

