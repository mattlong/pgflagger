// @flow

import { connect } from 'react-redux'

import { sayHelloAsync } from '../actions'
import Button from '../component/button'

const mapStateToProps = () => ({
	label: 'Say Hello Async',
})

const mapDispatchToProps = dispatch => ({
	handleClick: () => { dispatch(sayHelloAsync(999)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)