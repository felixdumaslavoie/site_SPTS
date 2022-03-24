import Head from 'next/head'
import styles from '../../styles/textes.module.scss'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


const Post = () => {
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

  }, []);


  const router = useRouter()
  var texte = router.query;
  var id = undefined;
  var item = undefined;


  if (texte.idTexte !== undefined) {
    id = texte.idTexte;
    window.$ = window.jQuery = require('jquery');
    var url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSR_-ck57oRickpgHNsBAeXuCrLWcqiyGQFHsMNDevh8Oj2LZlfBlXbzYvk3XDdZbYr9kkURQy_ckrm/pub?gid=0&single=true&output=tsv";
    
    $.ajax({
      url: url,
      context: document.body,
      async: true,
      cache: true,
      success: function (data) {
      
        item = data.split(String.fromCharCode(9));

        console.log(item)

        var finalArray = [];
        const stringD = "^\r\n";
        const stringF = "\r\n$";
        const regexpDebut = new RegExp(stringD);
        const regexpFin = new RegExp(stringF);
        $.each(item, function (i, items) {
          if (items.includes("\r\n")) {
            if (regexpDebut.test(items) || regexpFin.test(items)) {
              //console.log(items);
              items = items.replace("\r\n", "");
              finalArray.push(items);
            }
            else {
              let tab = items.split("\r\n");
              finalArray.push(tab[0]);
              finalArray.push(tab[1]);
            }
          }
          else if (items == "") { /* Do nothing...*/ }
          else if (items) {
            finalArray.push(items);
          }
        });

        finalArray.splice(0, 10) // On enlève les 10 premiers résultats

        // Fonction de recherche du texte grâce à l'url de next.js...
        var i = 1;
        let trouve = false;
        do {
          if (finalArray[i]) {

            if (finalArray[i] == texte.idTexte)
            {
              trouve = true;
              break;
            }
            i += 5;
          } else {
            break;
          }
        } while (true);

        //Garder juste l'information du texte recherché...
        if (trouve)
        {
          i -= 1; // On revient une case avant pour bien se positionner...
          finalArray = finalArray.splice(i, 5) // On coupe pour ne garder que le bon texte
          //console.log(finalArray)
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
          $('#texteContenu').html(result);
          //$('#texteContenu').find("a").attr() https://stackoverflow.com/questions/20354276/adding-attribute-to-link-via-jquery
        }
      },
      error: function (err) {
        console.log(err.status);
        let string = "erreur dans la recherche du texte";
        console.log(string);
        $('#texteContenu').html(string);
      }
    });
  }









  return (
    <>

      <div className={styles.container}>
        <Head>
          <title>Collectif SPTS: Textes</title>
          <meta property="og:title" content="Collectif SPTS: Textes" />
          <meta property="og:url" content="https://collectifspts.org/textes/" />
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

export default Post