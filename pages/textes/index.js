import Head from 'next/head'
import styles from '../../styles/indexTextes.module.scss'
import Navbar from '../../comps/Navbar'
import Footer from '../../comps/Footer'
import { useEffect, useCallback } from 'react'
import { fetchAPI } from "../../lib/api";



export async function getStaticProps() {
  // Run API calls in parallel
  const [textesRes] = await Promise.all([
    fetchAPI("/textes", { })
  ]);

  return {
    props: {
      textes: textesRes.data
    },
    revalidate: 1,
  };
}

export default function Textes({textes}){
  var Logo = undefined;
  var endOfDocumentTop = undefined;
  var size = undefined;


  const filterFunction = () => {
  // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  };

  useEffect(() => {
    window.$ = window.jQuery = require('jquery');
    
    if (Logo === undefined || endOfDocumentTop === undefined || size === undefined ) {
      Logo = document.getElementById("logo");
      endOfDocumentTop = 0;
      size = 0;
    }

    textes.forEach( txt => {
        $("#listeTextes #myUL").append("<li><a href="+ "textes/" + txt.attributes.Url +">"+ txt.attributes.Titre +"<span>"+ txt.attributes.Date +"</span></a></li>");
      });
  
    
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
                  <span className='detail_color'>Textes</span>
                </h1>
              </header>
    
              <section id='listeTextes' className={styles.listeTextes}>
               <input type="text" placeholder="Rechercher un texte..." id="myInput" onKeyUp={filterFunction}/>
                <ul id='myUL' className='listeTxts'>
                  
                </ul>
              </section>
    
    
    
            </main>

            <Footer/>
          </div>
        </>)
}



