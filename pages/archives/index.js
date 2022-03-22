import Head from 'next/head'
import styles from '../../styles/archives.module.scss'
import Link from 'next/link'
import Script from 'next/script'

export default function Archives() {
  return (
    <>
    <Script
      src="/scripts/main.js"
      onLoad={() => {
        window.onscroll = function() {
          growShrinkLogo()
        };
      }}
    />

      <div className={styles.container}>
      <Head>
        <title>Collectif SPTS: Archives</title>
        <meta name="description" content="Collectif un salaire pour toustes les stagiaires" />
        <link rel="icon" href="/favicon.ico" />
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
                <a className='selected'>Archives</a>
              </Link></li>
            <li className='sub1_color'><Link href="/appuis">
                <a>Appuis</a>
              </Link></li>
            <li className='detail_color'><Link href="/contact">
                <a>Contact</a>
              </Link></li>
          </ul>
        </div>
        <header className='header_subsections'>
        <h1 className='headerh1blue'>

        <div className='header_underline'>
          <span>A</span>
          <span>r</span>
          <span>c</span>
          <span>h</span>
          <span>i</span>
          <span>v</span>
          <span>e</span>
          <span>s</span>
        </div>
        </h1>
        <h5>
          Matériel <div className='header_underline'>ancien</div> 
        </h5>
        </header>



      <section className={styles.archivesCutes}>
        <h4>Matériel produit par les comités unitaires sur le travail étudiant (CUTEs)</h4>
        <h5>Entre 2016 et 2019</h5>
        <h6>Magazines</h6>
        <ul>
          <li><Link href="/archives/cutes/magazines/CUTEmag0.pdf"><a target="_blank" rel='noreferrer'>Cute magazine #0 - Automne 2016</a></Link><Link href="/archives/cutes/magazines/CUTEmag0.pdf"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="Télécharger le Cute magazine #0" width={50} height={50} /></a></Link></li>          
          <li><Link href="/archives/cutes/magazines/CUTEmag1.pdf"><a target="_blank" rel='noreferrer'>Cute magazine #1 - Hiver 2017</a></Link><Link href="/archives/cutes/magazines/CUTEmag1.pdf"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="Télécharger le Cute magazine #1" width={50} height={50} /></a></Link></li>          
          <li><Link href="/archives/cutes/magazines/CUTEmag2.pdf"><a target="_blank" rel='noreferrer'>Cute magazine #2 - Automne 2017</a></Link><Link href="/archives/cutes/magazines/CUTEmag2.pdf"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="Télécharger le Cute magazine #2" width={50} height={50} /></a></Link></li>          
          <li><Link href="/archives/cutes/magazines/CUTEmag3.pdf"><a target="_blank" rel='noreferrer'>Cute magazine #3 - Hiver 2018</a></Link><Link href="/archives/cutes/magazines/CUTEmag3.pdf"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="Télécharger le Cute magazine #3" width={50} height={50} /></a></Link></li>
          <li><Link href="/archives/cutes/magazines/CUTEmag4.pdf"><a target="_blank" rel='noreferrer'>Cute magazine #4 - Automne 2018</a></Link><Link href="/archives/cutes/magazines/CUTEmag4.pdf"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="Télécharger le Cute magazine #4" width={50} height={50} /></a></Link></li>          
          <li><Link href="/archives/cutes/magazines/CUTEmag5.pdf"><a target="_blank" rel='noreferrer'>Cute magazine #5 - Hiver 2019</a></Link><Link href="/archives/cutes/magazines/CUTEmag5.pdf"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="Télécharger le Cute magazine #5" width={50} height={50} /></a></Link></li>      
          <li><Link href="/archives/cutes/magazines/CUTEmag6.pdf"><a target="_blank" rel='noreferrer'>Cute magazine #6, bilan - Automne 2019</a></Link><Link href="/archives/cutes/magazines/CUTEmag6.pdf"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="Télécharger le Cute magazine #6" width={50} height={50} /></a></Link></li>      
        </ul>
        <h6>Tracts et affiches</h6>
        <ul className={styles.archivesCutesMatos}>
          <li><Link href="/archives/cutes/materiel/10novembre_Affiche_Fr.pdf"><a target="_blank" rel='noreferrer'>10novembre_Affiche_Fr.pdf</a></Link><Link href="/archives/cutes/materiel/10novembre_Affiche_Fr.pdf"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="10novembre affiche fr" width={50} height={50} /></a></Link></li>             
          <li><Link href="/archives/cutes/materiel/10novembre_Tract.pdf"><a target="_blank" rel='noreferrer'>10novembre_Tract.pdf</a></Link><Link href="/archives/cutes/materiel/10novembre_Tract.pdf"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="10novembre_Tract.pdf" width={50} height={50} /></a></Link></li>
          <li><Link href="/archives/cutes/materiel/brochure-standard-FINAL.pdf"><a target="_blank" rel='noreferrer'>brochure-standard-FINAL.pdf</a></Link><Link href="/archives/cutes/materiel/brochure-standard-FINAL.pdf"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="brochure-standard-FINAL.pdf" width={50} height={50} /></a></Link></li>
          <li><Link href="/archives/cutes/materiel/CUTE_affiche_2_novembre_DOMESTIQUE.pdf"><a target="_blank" rel='noreferrer'>CUTE_affiche_2_novembre_DOMESTIQUE.pdf</a></Link><Link href="/archives/cutes/materiel/CUTE_affiche_2_novembre_DOMESTIQUE.pdf"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="CUTE_affiche_2_novembre_DOMESTIQUE.pdf" width={50} height={50} /></a></Link></li>                   
          <li><Link href="/archives/cutes/materiel/CUTE_affiche_2_novembre_ETUDIER.pdf"><a target="_blank" rel='noreferrer'>CUTE_affiche_2_novembre_ETUDIER.pdf</a></Link><Link href="/archives/cutes/materiel/CUTE_affiche_2_novembre_ETUDIER.pdf"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="CUTE_affiche_2_novembre_ETUDIER.pdf" width={50} height={50} /></a></Link></li>                   
          <li><Link href="/archives/cutes/materiel/CUTE_affiche_2_novembre_STAGES.pdf"><a target="_blank" rel='noreferrer'>CUTE_affiche_2_novembre_STAGES.pdf</a></Link><Link href="/archives/cutes/materiel/CUTE_affiche_2_novembre_STAGES.pdf"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="CUTE_affiche_2_novembre_STAGES.pdf" width={50} height={50} /></a></Link></li>
          <li><Link href="/archives/cutes/materiel/CUTE_tract_2_novembre_DOMESTIQUE.pdf"><a target="_blank" rel='noreferrer'>CUTE_tract_2_novembre_DOMESTIQUE.pdf</a></Link><Link href="/archives/cutes/materiel/CUTE_tract_2_novembre_DOMESTIQUE.pdf"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="CUTE_tract_2_novembre_DOMESTIQUE.pdf" width={50} height={50} /></a></Link></li>                   
          <li><Link href="/archives/cutes/materiel/CUTE_tract_2_novembre_ETUDIER.pdf"><a target="_blank" rel='noreferrer'>CUTE_tract_2_novembre_ETUDIER.pdf</a></Link><Link href="/archives/cutes/materiel/CUTE_tract_2_novembre_ETUDIER.pdf"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="CUTE_tract_2_novembre_ETUDIER.pdf" width={50} height={50} /></a></Link></li>                   
          <li><Link href="/archives/cutes/materiel/CUTE_tract_2_novembre_STAGES.pdf"><a target="_blank" rel='noreferrer'>CUTE_tract_2_novembre_STAGES.pdf</a></Link><Link href="/archives/cutes/materiel/CUTE_tract_2_novembre_STAGES.pdf"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="CUTE_tract_2_novembre_STAGES.pdf" width={50} height={50} /></a></Link></li>
          <li><Link href="/archives/cutes/materiel/CUTE_UdeM_Violence_Sexuelle.pdf"><a target="_blank" rel='noreferrer'>CUTE_UdeM_Violence_Sexuelle.pdf</a></Link><Link href="/archives/cutes/materiel/CUTE_UdeM_Violence_Sexuelle.pdf"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="CUTE_UdeM_Violence_Sexuelle.pdf" width={50} height={50} /></a></Link></li>
          <li><Link href="/archives/cutes/materiel/CUTE_Wedd_In_Affiche.jpg"><a target="_blank" rel='noreferrer'>CUTE_Wedd_In_Affiche.jpg</a></Link><Link href="/archives/cutes/materiel/CUTE_Wedd_In_Affiche.jpg"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="CUTE_Wedd_In_Affiche.jpg" width={50} height={50} /></a></Link></li>                   
          <li><Link href="/archives/cutes/materiel/CUTE_Wedd_In_Tract.pdf"><a target="_blank" rel='noreferrer'>CUTE_Wedd_In_Tract.pdf</a></Link><Link href="/archives/cutes/materiel/CUTE_Wedd_In_Tract.pdf"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="CUTE_Wedd_In_Tract.pdf" width={50} height={50} /></a></Link></li>                   
          <li><Link href="/archives/cutes/materiel/Novembre10_Poster_EN.pdf"><a target="_blank" rel='noreferrer'>Novembre10_Poster_EN.pdf</a></Link><Link href="/archives/cutes/materiel/Novembre10_Poster_EN.pdf"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="Novembre10_Poster_EN.pdf" width={50} height={50} /></a></Link></li>
          <li><Link href="/archives/cutes/materiel/tract_RDV_1.pdf"><a target="_blank" rel='noreferrer'>tract_RDV_1.pdf</a></Link><Link href="/archives/cutes/materiel/tract_RDV_1.pdf"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="tract_RDV_1.pdf" width={50} height={50} /></a></Link></li>                   
          <li><Link href="/archives/cutes/materiel/tract_RDV_2.pdf"><a target="_blank" rel='noreferrer'>tract_RDV_2.pdf</a></Link><Link href="/archives/cutes/materiel/tract_RDV_2.pdf"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="tract_RDV_2.pdf" width={50} height={50} /></a></Link></li>                   
          <li><Link href="/archives/cutes/materiel/tract_RDV_3.pdf"><a target="_blank" rel='noreferrer'>tract_RDV_3.pdf</a></Link><Link href="/archives/cutes/materiel/tract_RDV_3.pdf"><a target="_blank" rel='noreferrer'><img src="/download.svg" alt="tract_RDV_3.pdf" width={50} height={50} /></a></Link></li>
        </ul>
      </section>

      <section className={styles.archivesDissidentes}>
        <h4>Textes de réflexion et de théorie</h4>
        <h5>Entre 2016 et 2019</h5>
        <ul>
        <li>Archivés sur le site <Link href="https://dissident.es/"><a target="_blank" rel='noreferrer'>Dissident.es</a></Link></li>
        </ul>
      </section>

      <section className={styles.archivesVideos}>
        <h4>Quelques vidéos produits lors de la campagne pour la rémunération des stages</h4>
        <h5>Entre 2016 et 2019</h5>
        <ul>
        <li><iframe width="560" height="315" src="https://www.youtube.com/embed/SqKxTndpRWw" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen=""></iframe></li>
        <li><iframe width="560" height="315" src="https://www.youtube.com/embed/HZBgbXzR_sY" frameBorder="0" allowFullScreen=""></iframe></li>
        <li><iframe width="560" height="315" src="https://www.youtube.com/embed/wbiCK4efYi8" frameBorder="0" allowFullScreen=""></iframe></li>
        <li><iframe width="560" height="350" src="https://www.youtube.com/embed/W_6QqX9jPzw" frameBorder="0" allowFullScreen=""></iframe></li>
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