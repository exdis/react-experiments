var React = require('react');

import HelloMessage from './src/HelloMessage.js';
var ComponentHelloMessage = React.createFactory(HelloMessage);

React.render(
	ComponentHelloMessage({ name: 'World' }),
	document.getElementById('container')
);
