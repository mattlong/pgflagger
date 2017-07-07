// @flow

import React from 'react'
import Select from 'react-select'

class SelectList extends React.Component {
	constructor(props) {
		super(props)
		props.loadData()
		this.state = {
			options: [],
			isLoading: false,
			currentValue: null,
		}
	}
	componentWillMount() {
	}
	render() {
		console.log('rendering...')
		console.log(`Options = ${this.state.options}`)
		return <div className="form-group row">
			<label className="col-sm-2 col-form-label">{this.props.label}</label>
			<Select
			  name="form-field-name"
			  simpleValue
			  clearable
			  isLoading={this.state.isLoading}
			  options={this.state.options}
			  value={this.state.currentValue}
			  onChange={this.props.handleChange}
			  className="col-sm-10"
			/>
		</div>
	}
}

SelectList.propTypes = {
	label: React.PropTypes.string.isRequired,
	handleChange: React.PropTypes.func.isRequired,
}

export default SelectList