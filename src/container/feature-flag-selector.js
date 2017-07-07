// @flow

import { connect } from 'react-redux'

import {
	featureFlagSelected,
	loadFeatureFlags,
} from '../actions'
import SelectList from '../component/select'

const listToOptions = (input: array) => {
	if (!input) {
		return []
	}

	return input.map((n: string) => {
		return { value: n, label: n }
	})
}

const mapStateToProps = state => ({
	label: 'Feature Flag',
	isLoading: state.FF.get('isLoadingFlags'),
	options: listToOptions(state.FF.get('projectFlags')),
	currentValue: state.FF.get('selectedFlag'),
})

const mapDispatchToProps = dispatch => ({
	loadData: () => {
		dispatch(loadFeatureFlags())
	},
	handleChange: (val: object) => {
		dispatch(featureFlagSelected(val))
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectList)
