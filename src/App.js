import Routes from 'routes'
import GlobalStyle from 'theme/globalStyle'
import AppProvider from 'utils/AppContext';
import { positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


const offSetAlert = window.innerWidth < 411 ? '70px' : '170px';

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 4000,
  offset: offSetAlert
}
 

const App = () => {
  return (
    <AppProvider>
      <AlertProvider template={AlertTemplate} {...options}>
        <GlobalStyle />
        <Routes />
      </AlertProvider>
    </AppProvider>
  );
}

export default App;
