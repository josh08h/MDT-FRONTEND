import React, { Component, PropTypes } from 'react'
import mdtPageOne from '../components/mdtPageOne'
import mdtPageTwo from '../components/mdtPageTwo'

class mdtReferral extends Component {
  constructor(props) {
    super(props)

    // Pro tip: The best place to bind your member functions is in the component constructor
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (<div>
        {page === 1 && <mdtPageOne onSubmit={this.nextPage}/>}
        {page === 2 && <mdtPageTwo previousPage={this.previousPage} onSubmit={this.nextPage}/>}
      </div>
    )
  }
}

// WizardForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// }

export default mdtReferral