import React from 'react';
import ReactDOM from 'react-dom';
import FooComponent from './components/foo-component';

const mount = document.getElementById('foo-component');

ReactDOM.hydrate(<FooComponent />, mount);
