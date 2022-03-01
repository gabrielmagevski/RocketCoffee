import { useMediaQuery } from 'react-responsive'

import CoffeeIllustration from '../../assets/rocket-coffee.png'
import Arrow from '../../assets/arrow.svg'

import WallpaperDown from '../../assets/blur-1.png';

import './section.scss'

export function Section(){
  const mobile = useMediaQuery({query: '(max-width: 720px)'});

  return(
    <>
      <main> 
        { 
          mobile ? (
          <>
            <h3 className="title">
              O café que fará seu código decolar para 
              o próximo nível.
            </h3>
            <div>
              <button
              className="button"
              >
                Pegar meu Café 
                <img src={Arrow} alt="Arrow" />
              </button>
            </div>  
          </>
          ) : ('')
        }
        <div>
          <h2 className="greatCoffee">Great Coffee</h2>
          <h2 className="shadowTitle">&lt;Great Coffee/&gt;</h2>

          <img className="coffeeIlustrationMobile coffeeIllustration" src={CoffeeIllustration} alt="Coffee" />
        </div>
      </main>
    </>
  )
}