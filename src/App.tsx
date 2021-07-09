import {createGlobalStyle} from 'styled-components'
import MainPage from 'pages/MainPage';

const GlobalStyle = createGlobalStyle`
  body {
        margin: 0;
    padding: 0;
        font-family: 'Roboto', sans-serif;
  }
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <MainPage />
    </>
  );
}

export default App;
