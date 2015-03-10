var React = require('react');

var HelloMessage = React.createClass({
	render: function() {
		return eval(require('./templates/hello-message.jsx'));
	}
});


React.render(
	eval(require('./templates/layout.jsx')),
	document.getElementById('container')
);
