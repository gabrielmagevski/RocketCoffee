import BurgerOpen from '../../../assets/menu-buguer-open.svg';
import BurgerClose from "../../../assets/menu-buguer-close.svg";

import LogoMobile from '../../../assets/logo-mobile.svg';

import './mobile.scss';
import { useState } from "react";
import { Sidebar } from './Sidebar';

export function Mobile() {
  const[open, setOpen] = useState(false);

  return(
    <>
      { open ? (
          <>
          <header>
            <nav>
              <div>
                <img className="logo" src={LogoMobile} alt="Logo Rocketseat" />    
              </div>
              <div>
                <img onClick={() => setOpen(!open)} className="buguer" src={BurgerClose} alt="Close" />
              </div>
            </nav>
            <Sidebar />
          </header>
          </>
        )
        : 
        (
        <header>
          <nav>
            <div>
              <img className="logo" src={LogoMobile} alt="Logo Rocketseat" />    
            </div>
            <div>
              <img onClick={() => setOpen(!open)} className="buguer" src={BurgerOpen} alt="Open" />
            </div>
          </nav>
        </header>
        ) 
      }
    </>
  )
}