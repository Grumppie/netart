import logo from './assets/asserts/logo.png'
import award from './assets/asserts/1.png'
import felicitationImage from './assets/asserts/2.png'
import productsImage from './assets/asserts/3.png'
import phoneIcon from './assets/phone-icon.png'
import facebookIcon from './assets/facebook-icon.png'
import globeIcon from './assets/globe-icon.png'

function App() {
  return (
    <div className="App">
      <header>
        <img className="logo" src={logo} alt="C.R.I fluid system logo" />
      </header>
      <section className="hero">
        <img src={award} alt="National Energy conservation award" className="award" />
        <section className="information">
          <h1 className="title"> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
          <ul className="info-list">
            <li className="first-point">
              <h3>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</h3>
            </li>
            <li className="second-point">
              <h3>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </h3>
            </li>
          </ul>
          <img src={felicitationImage} alt="felicitation" className="felicitation" />
          <p className="felicitation-description">
            Government of India has awarded the <span className="award-name">"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </section>
      </section>
      <section className="products-info">
        <p className="achievement-info">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
        </p>
        <img src={productsImage} alt="products" className="products" />
        <p className="products-description">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
        </p>
        <div className="products-end" />
      </section>
      <footer>
        <h1 className='footer-title'>
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h1>
        <p className="services">
          CHEMICALS & PROCESS <span className='footer-divider'>|</span> POWER <span className='footer-divider'>|</span> WATER & WASTE <span className='footer-divider'>|</span> WATER OILS & GAS <span className='footer-divider'>|</span> PHARMA <span className='footer-divider'>|</span> SUGARS & DISTILLERIES <span className='footer-divider'>|</span> PAPER & PULP <span className='footer-divider'>|</span> MARINE & DEFENCE <span className='footer-divider'>|</span> METAL & MINING <span className='footer-divider'>|</span> FOOD & BEVERAGE <span className='footer-divider'>|</span> PETROCHEMICAL & REFINERIES <span className='footer-divider'>|</span> SOLAR <span className='footer-divider'>|</span> BUILDING <span className='footer-divider'>|</span> HVAC <span className='footer-divider'>|</span> FIRE <span className='footer-divider'>|</span> FIGHTING <span className='footer-divider'>|</span> AGRICULTURE & RESIDENTIAL
        </p>
        <section className="socials">
          <ul className='socials-list'>
            <li className='socials-links'>
              <img className='phone-icon' src={phoneIcon} alt='phone-icon' />
              <p className="socials-info">
                Toll free <span className='socials-number'>1800 200 1234</span>
              </p>
            </li>
            <li className='socials-links'>
              <img className='facebook-icon' src={facebookIcon} alt='facebook-icon' />
              <a className="socials-info" href="https://www.facebook.com/cripumps" >
                https://www.facebook.com/cripumps
              </a>
            </li>
            <li className='socials-links'>
              <img className='phone-icon' src={globeIcon} alt='internet-icon' />
              <a className="socials-info" href="https://www.crigroups.com">
                https://www.crigroups.com
              </a>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  );
}

export default App;
