import Head from 'next/head'
import styles from '../../styles/appuis.module.scss'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Appuis() {
  var Logo = undefined;
  var endOfDocumentTop = undefined;
  var size = undefined;
  var appuisLoaded = false;

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

    if (!appuisLoaded) {
      document.getElementById("appuis").innerHTML = "";
      window.$ = window.jQuery = require('jquery');
      var url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQVypnxkBburgNwlvp7m9giqeZjNxJPjjEV4oHkA946mDyfiw_1oHPcR8_sI3QRzKIKJF9iItGaejNF/pub?gid=0&single=true&output=csv";
      $.ajax({
        url: url,
        context: document.body,
        success: function(data){
          var item = data.split("\n");
          item.shift();
          $.each(item, function (i, ioo) {
            let list_array = ioo.split(",");
            let listElement = '<li>' + '<a target="_blank" rel="noopener noreferrer" href="' + list_array[1] + '">' + list_array[0] + '</a>' + '</li>';
            $('#appuis').append(listElement);
          });
        },
        error: function (err) {
          console.log(err.status);
          console.log("erreur ajax appuis");
        }
    });

      appuisLoaded = true;
    }

  }, []);






  return (
    <>

      <div className={styles.container}>
        <Head>
          <title>Collectif SPTS: Organismes appuyant notre lutte</title>
          <meta property="og:title" content="Collectif SPTS: Organismes appuyant notre lutte" />
          <meta property="og:url" content="https://collectifspts.org/appuis" />
          <meta property="og:image" content="/thumbnails/appuis.jpg" />
          <meta property="og:type" content="website" />
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
          <header className='header_subsections_right'>
            <h1 className='headerh1blue'>

              <div className='header_underline'>
                <span>A</span>
                <span>p</span>
                <span>p</span>
                <span>u</span>
                <span>i</span>
                <span>s</span>
              </div>
            </h1>
            <h5>
              Organismes qui appuient nos <div className='header_underline'>revendications</div>
            </h5>
          </header>

          <section className={styles.lesAppuis}>
            <ul id='appuis'>
            </ul>
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