import styled from 'styled-components'
import Link from 'next/link'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: unset;
  background: #EFFFFA;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  width: 100vw;
  cursor: initial;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  ul {
    display: flex;
    flex-direction: column;
  }
  ul li {
    width: fit-content;
  }
  a {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
  <ul>
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
          <li>
          </li>
        </ul>
    </StyledMenu>
  )
}

export default Menu;