import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import reducer from './reducers'

const store=createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //如果...存在于window对象，直接调用函数
)//store 对象具有.getState() .dispatch()  .subscribe() 

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
