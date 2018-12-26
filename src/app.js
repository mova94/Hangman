//install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Hangman from './components/Hangman'

ReactDOM.render(<Hangman/>, document.getElementById('app'));
