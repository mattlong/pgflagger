// @flow

import { connect } from 'react-redux'

import { sayHello } from '../actions'
import Button from '../component/button'

const mapStateToProps = () => ({
	label: 'Say Hello',
})

const mapDispatchToProps = dispatch => ({
	handleClick: () => { dispatch(sayHello('something new')) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)