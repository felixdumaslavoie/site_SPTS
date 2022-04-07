import Head from 'next/head'
import styles from '../../styles/textes.module.scss'
import Link from 'next/link'
import { useEffect } from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Script from 'next/script'

const fetcher = (...args) => fetch(...args).then(res => res.json())


export default function Textes(){
  const router = useRouter();
  const { idTexte } = router.query;
  const { data, error } = useSWR('https://collectifspts.org/dynamicDataSPTS/textes/index/index.json', fetcher);
  var Logo = undefined;
  var endOfDocumentTop = undefined;
  var size = undefined;
  
  useEffect(() => {
    
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
    /*
    const router = useRouter();
    var texte = router.query;
    var id = undefined;
    var item = undefined;
  
  
    if (texte.idTexte !== undefined) {
      id = texte.idTexte;
      console.log(id);
      window.$ = window.jQuery = require('jquery');
      let txtIndex = "https://collectifspts.org/dynamicDataSPTS/textes/index/index.json"; 
      //let json = require(txtIndex);
      $.getJSON(txtIndex, function(json) {
        console.log(json); // this will show the info it in firebug console
    });
      
      /*
      let titre = finalArray[0];
      let autrices = finalArray[2].split(';')
      let date = finalArray[3]
      let texteMD = finalArray[4]
      $('#txtTitre').html(titre);
      let lesAutrices = "";
      autrices.forEach(element => lesAutrices += ("<li>" + element + "</li>"));
      $('#txtAutrices').html(lesAutrices)
      $('#txtDate').html("Publié le " + date);
  
      var MarkdownIt = require('markdown-it'),
      md = new MarkdownIt();
      let result = md.render(texteMD);
      $('#texteContenu').html(result);*/
  
  }, []);

  /*const showText = (txt) => {
    console.log(txt);
    window.$ = window.jQuery = require('jquery');
    var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
    let result = md.render(txt);
    $('#texteContenu').html(result);
  };

  const showTextError = (txt) => {
    console.log(txt);
  };

  if (data != undefined)
  {
    let urlTexte = idTexte;
    console.log(data);
    console.log(idTexte);
    fetch('https://collectifspts.org/dynamicDataSPTS/textes/' + idTexte + ".md").then(response =>{
      return response.blob();
    }).then( blob => {return blob.text()}).then(showText, showTextError);
  }*/
  

  return (
    
    <>
      <Script id="texts.js" strategy="afterInteractive">
        {`
        const showText = (txt) => {
          console.log(txt);
          window.$ = window.jQuery = require('jquery');
          var MarkdownIt = require('markdown-it'),
          md = new MarkdownIt();
          let result = md.render(txt);
          $('#texteContenu').html(result);
        };
      
        const showTextError = (txt) => {
          console.log(txt);
        };
        let idTexte = "le-combat-des-stagiaires-reprend"
        let urlTexte = idTexte;
        console.log(data);
        console.log(idTexte);
        fetch('https://collectifspts.org/dynamicDataSPTS/textes/' + idTexte + ".md").then(response =>{
           return response.blob();
         }).then( blob => {return blob.text()}).then(showText, showTextError);
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

