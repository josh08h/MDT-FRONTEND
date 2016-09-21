import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';
export const fields = [ 'firstName', 'lastName', 'dob', 'hospitalNumber', 'nhsNumber' ]

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length > 10) {
    errors.firstName = 'Must be 10 characters or less'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (values.lastName.length > 25) {
    errors.lastName = 'Must be 25 characters or less'
  }
  return errors
}
var formStyles = {
  paddingRight: '15%',
  paddingLeft: '15%',
  paddingTop: '3%',
  paddingBottom: '3%'
}
var divStyles = {
  paddingLeft: '50px',
  paddingTop: '12px',
  paddingBottom: '12px'
}

class mdtPageOne extends Component {
  render() {
    const {
      fields: { firstName, lastName, dob, hospitalNumber, nhsNumber },
      handleSubmit
    } = this.props
    return (<form style={formStyles} onSubmit={handleSubmit}>
      <h1>Patient Details</h1>
        <Paper zDepth={2} style={divStyles}>
        <div>
          <div>
            <TextField type="text" placeholder="First Name" {...firstName}/>
          </div>
          {firstName.touched && firstName.error && <div>{firstName.error}</div>}
        </div>
        <div>
          <div>
            <TextField type="text" placeholder="Last Name" {...lastName}/>
          </div>
          {lastName.touched && lastName.error && <div>{lastName.error}</div>}
        </div>
         <div>
          <div>
            <DatePicker hintText='DOB'/>
          </div>
        </div>
        <div>
          <div>
            <TextField type="text" placeholder="Hospital Number" {...hospitalNumber}/>
          </div>
        </div>
        <div>
          <div>
            <TextField type="text" placeholder="NHS Number (XXX-XXX-XXXX)" {...nhsNumber}/>
          </div>
        </div>
        <div>
          <RaisedButton type="submit">
            Next <i/>
          </RaisedButton>
        </div>
        </Paper>
      </form>
    )
  }
}

mdtPageOne.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'wizard',              // <------ same form name
  fields,                      // <------ only fields on this page
  destroyOnUnmount: false     // <------ preserve form data
                       // <------ only validates the fields on this page
})(mdtPageOne)