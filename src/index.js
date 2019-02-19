import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import App from './components/App';

require('./style/global.scss');

const store = configureStore();


const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      
        <AppContainer>
          <Component />
        </AppContainer>
      
    </Provider>,
    document.getElementById('app'),
  );
};
render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App); });
}
