import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    submitted: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({firstNameError: true})
    } else {
      this.setState({firstNameError: false})
    }
    if (lastName === '') {
      this.setState({lastNameError: true})
    } else {
      this.setState({lastNameError: false})
    }
    if (firstName !== '' && lastName !== '') {
      this.setState({submitted: true, firstName: '', lastName: ''})
    }
  }

  handleFirstNameBlur = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameError: true})
    } else {
      this.setState({firstNameError: false})
    }
  }

  renderFirstNameField = () => {
    const {firstName, firstNameError} = this.state
    const errorStyle = firstNameError ? 'require-input' : ''
    return (
      <>
        <label className="input-label" htmlFor="firstname">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstname"
          className={`firstname-input-field ${errorStyle}`}
          placeholder="First name"
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.handleFirstNameBlur}
        />
      </>
    )
  }

  handleLastNameBlur = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameError: true})
    } else {
      this.setState({lastNameError: false})
    }
  }

  renderLastNameField = () => {
    const {lastName, lastNameError} = this.state
    const errorStyle = lastNameError ? 'require-input' : ''
    return (
      <>
        <label className="input-label" htmlFor="lastname">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastname"
          className={`lastname-input-field ${errorStyle}`}
          placeholder="Last name"
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.handleLastNameBlur}
        />
      </>
    )
  }

  renderForm = () => {
    const {firstNameError, lastNameError} = this.state
    return (
      <form className="form-container" onSubmit={this.submitForm}>
        <div className="input-container">{this.renderFirstNameField()}</div>
        {firstNameError ? <p className="error-message">Required</p> : null}
        <div className="input-container">{this.renderLastNameField()}</div>
        {lastNameError ? <p className="error-message">Required</p> : null}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  submitAnotherResponse = () => {
    this.setState({submitted: false})
  }

  renderSuccessful = () => (
    <div className="form-container">
      <img
        alt="success"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="success-icon"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.submitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {submitted} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        {submitted ? this.renderSuccessful() : this.renderForm()}
      </div>
    )
  }
}

export default RegistrationForm
