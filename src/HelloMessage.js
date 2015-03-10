var React = require('react');

class HelloMessage {
	render() {
		return require('../templates/hello-message.jsx');
	}
}

export default React.createClass(HelloMessage.prototype);

