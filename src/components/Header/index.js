import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="nav-container">
        <img
          className="nav-website-Logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <div className="nav-item-container">
          <Link to="/">
            <img
              className="nav-item-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
            />
          </Link>
          <Link to="/products">
            <img
              className="nav-item-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
            />
          </Link>
          <Link to="/cart">
            <img
              className="nav-item-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
            />
          </Link>
          <button type="button" className="nav-logout-btn">
            <img
              className="nav-item-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default Header
