import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//React를 사용해서 웹사이트에 올려놓고 싶을 때 ReactDOM 사용하기! App -> reactNative!
ReactDOM.render(<App />, document.getElementById('root'));  
//한개의 컴포넌트를 index.html속 root에서 render(출력)하기
registerServiceWorker();
