import Head from 'next/head'
import styles from '../../styles/contact.module.scss'
import Link from 'next/link'
import { useEffect } from 'react'
import Navbar from '../../comps/Navbar'
import Footer from '../../comps/Footer'


export default function Contact() {
  var Logo = undefined;
  var endOfDocumentTop = undefined;
  var size = undefined;

  useEffect(() => {
    if (Logo === undefined || endOfDocumentTop === undefined || size === undefined ) {
      Logo = document.getElementById("logo");
      endOfDocumentTop = 150;
      size = 0;
    }

    let select = document.getElementById("id_contact");
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
        <title>Collectif SPTS: Contact</title>
        <meta property="og:title" content="Collectif SPTS: Contact" />
        <meta property="og:url" content="https://collectifspts.org/contact"/>  
        <meta property="og:image" content="/thumbnails/contact.jpg"/>
        <meta property="og:type" content="website"/>  
        <meta property="og:description" content="Pour rejoindre le collectif"/> 
        <meta name="description" content="Pour joindre, entrer en contact avec le collectif un salaire pour toustes les stagiaires..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar/>
        <header className='headerh1gold'>
        <h1 className={styles.title}>

        <div className='header_underline'>
          <span>C</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
        </div>
        </h1>
        <h3>
          Pour (re)joindre le <div className='header_underline'>collectif:</div> 
        </h3>

        </header>

      <section className={styles.contactBox}>
        <h6 className='hidden'>Contact</h6>
        <ul>
          <li><div className={styles.alone}>Courriel </div> <a className={styles.underline} href="mailto:collectifspts@gmail.com"><span className='nice_color'> collectifspts@gmail.com</span></a></li>
          <li>Facebook <a target="_blank" rel='noreferrer' href='https://www.facebook.com/collectif.spts'><img src="/facebook_icon.svg" alt="Lien vers la page facebook" width={100} height={100} /></a></li>
          <li>Instagram <a target="_blank" rel='noreferrer' href='https://www.instagram.com/collectif.spts'><img src="/instagram_icon.svg" alt="Lien vers la page instagram" width={100} height={100} /></a></li>
        </ul>
      </section>
       
      </main>

    <Footer/>
    </div>
    </>)
}