import { useMediaQuery } from 'react-responsive';

import { Mobile } from '../Mobile';

import './desktop.scss';

import Logo from '../../../assets/logo-desktop.svg';

export function Navbar() {
  const mobile = useMediaQuery({query: '(max-width: 720px)'});

  return(
    <>
      {
        mobile ? (
        <Mobile />
      )
        :
      (
        <header className="headerDesktop">
          <nav className="navDesktop">
            <div>
              <img className="logoDesktop" src={Logo} alt="Logo Rocketseat" />    
            </div>
            <div className="list">
              <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Recompensas</li>
                <li>Gift Cards</li>
                <li>Lojas</li>
              </ul>
            </div>
            <div>
              <button className="button">Pegar meu café</button>
            </div>
          </nav>
        </header>
        )
      }
    </>
  )
}