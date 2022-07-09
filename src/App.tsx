import '@src/assets/styles/app.css';
import '@src/locales';
import ThemeProvider from '@src/theme/ThemeProvider';
import ApolloProvider from '@src/graphql/ApolloProvider';
import Routes from '@src/routes';

function App() {
  return (
    <ApolloProvider>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
