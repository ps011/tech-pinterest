import React, { useEffect } from 'react';
import { IonApp, IonContent } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import 'antd/dist/antd.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Custom Components */
import Routes from './routes'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import makeApolloClient from './auth/apollo';
import { RouteComponentProps, withRouter } from 'react-router';


const App: React.FC<RouteComponentProps> = ({ history }) => {

  const [client, setClient] = React.useState({});
  const [userToken, setUserToken] = React.useState('');

  useEffect(() => {
    fetchSession();
  }, [userToken])

  const fetchSession = () => {
    // fetch session
    const userToken = localStorage.getItem('userToken') || '';
    setUserToken(userToken);
    const client = makeApolloClient(userToken);
    setClient(client);
  }
  if (userToken === '') {
    history.push('/login')
    return null;
  }
  return (
    <ApolloProvider client={client as ApolloClient<any>}>
      <IonApp>
        <IonContent>
          {/*<Header />*/}
          <Routes />
          {/*<Footer />*/}
        </IonContent>
      </IonApp>
    </ApolloProvider>
  );
}

export default withRouter(App);
