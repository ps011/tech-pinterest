import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import NewItem from './pages/NewItem';
import Login from './pages/Login/Login';

const Routes: React.FC = () => {
  return (
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/new" component={NewItem} exact={true} />
          <Route path="/login" component={Login} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </IonReactRouter>
  );
};

export default Routes;