import Link from 'next/link'
import Burger from '../comps/Burger'
import Menu from './MenuBurger'
import { useState, useRef  } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();

    return (
        <nav className='mainMenu' id='navbar'>
        <ul>
          <li className='leLogo'><Link href="/"><a><div id='logo'></div></a></Link></li>
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
          <li  className="menuHamburg">
            <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
            </div>
          </li>
        </ul>
      </nav>

    );
}


export default Navbar;