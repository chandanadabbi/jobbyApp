import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', isTrue: false, error: ''}

  usernameonClickButton = event => {
    this.setState({username: event.target.value})
  }

  passwordonClickButton = event => {
    this.setState({password: event.target.value})
  }

  onSuccessSubmit = jwtToken => {
    const {history} = this.props
    console.log(history)
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFailureSubmit = error => {
    this.setState(prev => ({isTrue: !prev.isTrue, error: error}))
  }

  submitFormDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const loginurl = 'https://apis.ccbp.in/login'
    const response = await fetch(loginurl, options)
    const data = await response.json()

    if (response.ok) {
      this.onSuccessSubmit(data.jwt_token)
    } else {
      this.onFailureSubmit(data.error_msg)
    }
  }

  renderuserNameInput = () => {
    const {username} = this.state
    return (
      <div className="username-div">
        <label className="user-label" htmlFor="username">
          USERNAME
        </label>
        <input
          id="username"
          type="text"
          className="input-ele"
          value={username}
          onChange={this.usernameonClickButton}
          placeholder="Username"
        />
      </div>
    )
  }
  renderpasswordInput = () => {
    const {password} = this.state
    return (
      <div className="username-div">
        <label className="user-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          className="input-ele"
          type="password"
          id="password"
          value={password}
          onChange={this.passwordonClickButton}
          placeholder="Password"
        />
      </div>
    )
  }
  render() {
    const {error, isTrue} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-div1">
        <div className="login-div2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <form className="form-div" onSubmit={this.submitFormDetails}>
            {this.renderuserNameInput()}
            {this.renderpasswordInput()}
            <button type="submit" className="button-login">
              Login
            </button>
            {isTrue && <p className="error-para">*{error}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
