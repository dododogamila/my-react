import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Game from "./componnent/Game";
// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);


serviceWorker.unregister();
