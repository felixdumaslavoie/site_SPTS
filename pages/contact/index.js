import Head from 'next/head'
import styles from '../../styles/contact.module.scss'
import Link from 'next/link'

export default function Contact() {
  return (
<div className={styles.container}>
      <Head>
        <title>Collectif SPTS: Contact</title>
        <meta name="description" content="Collectif un salaire pour toustes les stagiaires" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div className='mainMenu'>
          <ul>
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
                <a>Appuis</a>
              </Link></li>
            <li className='detail_color'><Link href="/contact">
                <a className='selected'>Contact</a>
              </Link></li>
          </ul>
        </div>
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
  )
}