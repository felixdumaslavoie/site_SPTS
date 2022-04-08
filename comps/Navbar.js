import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='mainMenu'>
        <ul>
          <li><Link href="/"><a><div id='logo'></div></a></Link></li>
          <li className='detail_color'>
            <Link href="/textes">
              <a>Textes</a>
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
            <a>Contact</a>
          </Link></li>
        </ul>
      </nav>

    );
}


export default Navbar;