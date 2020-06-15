import React, { Component } from 'react';

export default class ClickOutside extends Component {
	constructor(props) {
		super(props);

		this.wrapperRef = React.createRef();
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}

	handleClickOutside(event) {
		const {ignoreClick} = this.props;
		if(ignoreClick && ignoreClick.contains(event.target))
			return;

		if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
			this.props.toggle(event);
		}
	}

	render() {
		// Inline styles will not be in prod
		return <div style={{width: '100%', height: '100%'}} ref={this.wrapperRef}>{this.props.children}</div>;
	}
}