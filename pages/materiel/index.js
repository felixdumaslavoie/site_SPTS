import Head from 'next/head'
import styles from '../../styles/materiel.module.scss'
import { useEffect } from 'react'
import Navbar from '../../comps/Navbar'
import Footer from '../../comps/Footer'
import { simpleApi } from '../../lib/simpleApi';
import fr from 'date-and-time/locale/fr';


export async function getStaticProps() {

  let quer = "materiels/?populate=*";

  let materielRes = await simpleApi(quer);

  

  return {
    props: {
      materiel: materielRes.result
    },
    revalidate: 1,
  };
}




export default function Materiel({materiel}) {
  var Logo = undefined;
  var endOfDocumentTop = undefined;
  var size = undefined;

  useEffect(() => {
    if (Logo === undefined || endOfDocumentTop === undefined || size === undefined ) {
      Logo = document.getElementById("logo");
      endOfDocumentTop = 0;
      size = 0;
    }

    let select = document.getElementById("id_materiel");
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
        <title>Collectif SPTS: Matériel</title>
        <meta property="og:title" content="Collectif SPTS: Matériel de mobilisation"/>
        <meta property="og:url" content="https://collectifspts.org/historique"/> 
        <meta property="og:image" content="/thumbnails/materiel.jpg"/>
        <meta property="og:type" content="website"/>  
        <meta property="og:description" content="Materiel de mobilisation"/> 
        <meta name="description" content="Materiel de mobilisation produit par le collectif" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar/>
        <header className='header_subsections'>
        <h1 className='headerh1blue'>

        <div className='header_underline'>
          <span>Matériel</span>
        </div>
        </h1>
        <h5>
          Matériel produit par le <div className='header_underline'>collectif</div> 
        </h5>
        </header>

        <section className={styles.materiel}>
          <ul>
           {materiel.data.map(i => 
           <li key={i.id}><a href={'https://api.collectifspts.org' + i.attributes.Fichier.data[0].attributes.url} download target="_blank">{i.attributes.Nom}<span>{new Date(i.attributes.Fichier.data[0].attributes.updatedAt).toISOString().split('T')[0]}</span></a></li>) }
          </ul>
        </section>

        
       
      </main>

      <Footer/>
    </div>
    </>)
}