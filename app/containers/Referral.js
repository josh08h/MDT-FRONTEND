import React, { Component, PropTypes } from 'react'
import WizardFormFirstPage from '../components/WizardFormFirstPage'
import WizardFormSecondPage from '../components/WizardFormSecondPage'
import WizardFormThirdPage from '../components/WizardFormThirdPage'

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
        {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage}/>}
        {page === 2 && <WizardFormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 3 && <WizardFormThirdPage previousPage={this.previousPage} onSubmit={onSubmit}/>}
      </div>
    )
  }
}

// WizardForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// }

export default mdtReferral