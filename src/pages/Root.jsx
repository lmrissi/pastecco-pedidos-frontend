import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from 'components/Store/Provider';
import RoutesPrivate from 'components/Routes/Private/Private'
import PagesHome from './Home/Home';
import PagesLogin from './Login/Login';
import PagesMain from './Main/Main';
import PagesMenu from './Menu/Menu';
import PagesCarrinho from './Carrinho/Carrinho'

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={PagesLogin} />
        <Route path="/" component={PagesMain} exact/>
        <Route path="/menu" component={PagesMenu} />
        <Route path="/carrinho" component={PagesCarrinho} />
        <RoutesPrivate path="/home" component={PagesHome} />
      </Switch>
    </StoreProvider>
  </Router>
)


export default PagesRoot;