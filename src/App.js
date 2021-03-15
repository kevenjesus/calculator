import Routes from 'routes'
import GlobalStyle from 'theme/globalStyle'
import AppProvider from 'utils/AppContext';

const App = () => {
  return (
    <AppProvider>
      <GlobalStyle />
      <Routes />
    </AppProvider>
  );
}

export default App;
