
import {CiSettings} from 'react-icons/ci'
import './navbar.css'
import logo from '../../assets/img/logo.svg'
import  data from './data'

const NavBar = () => {
  return (
    <nav id="navbar">
      <div className="container nav__container">
        <a href="/" className='nav__logo'>
          <img src={logo} alt="logo" />
        </a>
        <ul className="nav__menu">
          {
            data.map(item => <li key={ item.id}><a href={ item.link}>{ item.title}</a></li>)
          }
        </ul>
          
        <button id='theme__icon' ><CiSettings /></button>
      </div>
    </nav>
  )
}

export default NavBar
