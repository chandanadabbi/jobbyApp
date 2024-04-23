import {Link, withRouter} from 'react-router-dom'
import {MdHome} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import {BsFillBriefcaseFill} from 'react-icons/bs'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogoutButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="header-div1">
      <div className="header-sm-div">
        <div>
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="header-sm-logo"
            />
          </Link>
        </div>
        <ul className="ul-logos-bg">
          <li>
            <Link to="/">
              <MdHome className="home-logo" />
            </Link>
          </li>
          <li>
            <Link to="/jobs">
              <BsFillBriefcaseFill className="home-logo" />
            </Link>
          </li>
          <li>
            <button className="logout-button" onClick={onClickLogoutButton}>
              <FiLogOut className="home-logo" />
            </button>
          </li>
        </ul>
      </div>
      <div className="header-large-div">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="header-large-logo"
          />
        </Link>
        <ul className="large-header-ul-bg">
          <li>
            <Link to="/" className="link-heading">
              Home
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="link-heading">
              Jobs
            </Link>
          </li>
        </ul>
        <button className="logout-large-header" onClick={onClickLogoutButton}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
