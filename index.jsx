/** @jsx React.DOM */
var React = require('react');

var HelloMessage = React.createClass({
	render: function() {
		return <div>Hello {this.props.name}</div>;
	}
});

React.render(
	<HelloMessage name="World" />,
	document.getElementById('container')
);
