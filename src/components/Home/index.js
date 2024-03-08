import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-container">
          <div className="home-content-container">
            <h1 className="home-content-heading">
              Clothes That Get You Noticed
            </h1>
            <p className="content-description">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you beeb seen
              and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button type="button" className="shop-now-btn">
              Shop Now
            </button>
          </div>
          <img
            className="home-content-image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
          />
        </div>
      </div>
    )
  }
}
export default Home
