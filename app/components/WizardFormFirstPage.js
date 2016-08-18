import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
export const fields = [ 'firstName', 'lastName', 'dob' ]

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Must be 15 characters or less'
  }
  return errors
}

class WizardFormFirstPage extends Component {
  render() {
    const {
      fields: { firstName, lastName, dob },
      handleSubmit
    } = this.props
    return (<form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <div>
            <input type="text" placeholder="First Name" {...firstName}/>
          </div>
          {firstName.touched && firstName.error && <div>{firstName.error}</div>}
        </div>
        <div>
          <label>dob</label>
          <div>
            <input type="text" placeholder="dob" {...dob}/>
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <input type="text" placeholder="Last Name" {...lastName}/>
          </div>
          {lastName.touched && lastName.error && <div>{lastName.error}</div>}
        </div>
        <div>
          <button type="submit">
            Next <i/>
          </button>
        </div>
      </form>
    )
  }
}

WizardFormFirstPage.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'wizard',              // <------ same form name
  fields,                      // <------ only fields on this page
  destroyOnUnmount: false,     // <------ preserve form data
  validate                     // <------ only validates the fields on this page
})(WizardFormFirstPage)