import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import CheckBox from 'material-ui/CheckBox';
export const fields = [ 'requestedBy', 'email', 'sex' ]

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  }
  if (!values.sex) {
    errors.sex = 'Required'
  }
  return errors
}
var formStyles = {
  paddingRight: '15%',
  paddingLeft: '15%',
  paddingTop: '3%',
  paddingBottom: '3%'
}

var paperStyles = {
  paddingLeft: '50px',
  paddingTop: '12px',
  paddingBottom: '12px'
}

class mdtPageTwo extends Component {
  render() {
    const {
      fields: { requestedBy, email, sex },
      handleSubmit,
      previousPage
    } = this.props
    return (<form style={formStyles} onSubmit={handleSubmit}>
      <h1>Referrer Details</h1>
        <Paper style={paperStyles}>
        <div>
          <div>
            <TextField hintText={'Requested By'} {...requestedBy}/>
          </div>
        </div>
        <div>
          <label>Sex</label>
          <div>
            <label>
              <input type="radio" {...sex} value="male" checked={sex.value === 'male'}/> Male
            </label>
            <label>
              <input type="radio" {...sex} value="female" checked={sex.value === 'female'}/> Female
            </label>
          </div>
          {sex.touched && sex.error && <div>{sex.error}</div>}
        </div>
        <div>
          <RaisedButton type="button" onClick={previousPage}>
            <i/> Previous
          </RaisedButton>
          <RaisedButton type="submit">
            Next <i/>
          </RaisedButton>
        </div>
        </Paper>
      </form>
    )
  }
}

mdtPageTwo.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'mdtReferral',              // <------ same form name
  fields,                      // <------ only fields on this page
  destroyOnUnmount: false,     // <------ preserve form data
  validate                     // <------ only validates the fields on this page
})(mdtPageTwo)