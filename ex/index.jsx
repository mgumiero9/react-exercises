import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component.jsx';
import {First, Second} from './components.jsx';

ReactDOM.render(
	<div>
		<Component value={'show'}/>
		<First/>
		<Second/>
	</div>
	, document.getElementById('app'));