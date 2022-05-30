import Link from 'next/link'
import {useEffect} from "react";

const Navbar = () => {

    useEffect(() => {
      
     
      document.getElementsByClassName("hamburger-icon").onclick = function() {
        document.getElementsByClassName("hamburger-icon").classList.toggle("change");
        console.log("FMLFML")
      }  
    })

  
    return (
        <nav className='mainMenu' id='navbar'>
        <div className='background-burger'></div>
        <div className="hamburger-icon" id="icon">
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
            <div className="clear"></div>
        </div>
        <ul>
          <li><Link href="/"><a><div id='logo'></div></a></Link></li>
          <li className='detail_color'>
            <Link href="/textes">
              <a id='id_textes'>Textes</a>
            </Link></li>
          <li className='sub1_color'>
            <Link href="/materiel">
              <a id='id_materiel'>Matériel</a>
            </Link></li>
          <li className='nice_color'><Link href="/historique">
            <a id='id_historique'>Historique</a>
          </Link></li>
          <li className='sub1_color'><Link href="/evenements">
            <a id='id_events'>Évenements</a>
          </Link></li>
          <li className='nice_color'><Link href="/archives">
            <a id='id_archives'>Archives</a>
          </Link></li>
          <li className='sub1_color'><Link href="/appuis">
            <a id='id_appuis'>Appuis</a>
          </Link></li>
          <li className='detail_color'><Link href="/contact">
            <a id='id_contact'>Contact</a>
          </Link></li>
        </ul>
      </nav>

    );
}


export default Navbar;