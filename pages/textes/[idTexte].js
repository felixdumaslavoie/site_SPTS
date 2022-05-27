import Head from 'next/head'
import styles from '../../styles/textes.module.scss'
import Navbar from '../../comps/Navbar'
import Footer from '../../comps/Footer'
import ScrollButton from '../../comps/scrollTop'
import { useEffect } from 'react'
import { simpleApi } from '../../lib/simpleApi'
import  {useRouter } from 'next/router'


export async function getServerSideProps(context) {
  const { idTexte } = context.query;

  let quer = "textes/?filters[Url]=" + idTexte;

  let result = await simpleApi(quer)

  if(result.result.data[0] === undefined) {
    return {
      // returns a redirect to an internal page `/another-page`
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  let id = result.result.data[0].id;

  let txt = await simpleApi("textes/" + id + "?populate=*")

  // Contenu
  var md = require('markdown-it')();
  let contenu = md.render(txt.result.data.attributes.Contenu);

  contenu = {__html: contenu};

  return {
    props: {
      texte: txt,
      content: contenu
    }
    
  };
}

export default function Texte({texte, content, notFound}){
    const router = useRouter()
    var Logo = undefined;
    var endOfDocumentTop = undefined;
    var size = undefined;
    
    if (notFound) {
      return <>
      <Head>
        <meta name="robots" content="noindex"/>
      </Head>
      <DefaultErrorPage statusCode={404} />
    </>
    }
  
    useEffect(() => {
      window.$ = window.jQuery = require('jquery');
      
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
                <title>Collectif SPTS: {texte.result.data.attributes.Titre}</title>
                <meta property="og:title" content="Collectif SPTS: Textes" />
                <meta property="og:url" content="https://collectifspts.org/textes/" />
                <meta property="og:image" content="" />
                <meta property="og:type" content="article" />
                <meta property="og:description" content="Organismes qui appuient la salarisation" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Collectif un salaire pour toustes les stagiaires" />
              </Head>
      
              <main className={styles.main}>
  
                <header className='header_subsections_center'>
                <Navbar/>
                  <h1 id='txtTitre' className={styles.headerTitre}>
                    <span className='detail_color'>{texte.result.data.attributes.Titre}</span>
                  </h1>
                </header>
                  <section className={styles.autrices}>
                  <h5>
                      <ul id='txtAutrices'>
                        {texte.result.data.attributes.auteurices.data.map((aut) => {
                          return (
                            <li key={aut.id}>{aut.attributes.Nom}</li>
                            )
                        })}
                        
                      </ul>
                  </h5>
                  </section>
                  <div className={styles.coverImg} style={{ backgroundImage: `url(${"https://api.collectifspts.org"+ texte.result.data.attributes.Cover.data.attributes.url})` }}></div>
          <section id='texteContenu' className={styles.leTexte} dangerouslySetInnerHTML={content}>
          </section>      
    
              <ScrollButton/>   
              </main>
  
              <Footer/>
            </div>
          </>)
           
  }


