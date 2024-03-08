import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: ''}

  onSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      this.onSuccess()
    }
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserNameInput = () => {
    const {userName} = this.state

    return (
      <>
        <label className="input-label" htmlFor="userName">
          USERNAME
        </label>
        <br />
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={this.onChangeUserName}
          className="input-box"
        />
      </>
    )
  }

  renderPasswordInput = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="password" className="input-label">
          PASSWORD
        </label>
        <br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={this.onChangePassword}
          className="input-box"
        />
      </>
    )
  }

  render() {
    return (
      <div className="loginForm-container">
        <div>
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
        </div>
        <img
          className="loginPort-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <div>
            <img
              className="form-website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </div>
          <div>{this.renderUserNameInput()}</div>
          <div>{this.renderPasswordInput()}</div>
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
