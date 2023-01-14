import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';
import Main from './components/Main';
import { WeatherProvider } from './context/WeatherContext';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App mt-5">
      <WeatherProvider>
        <Weather></Weather>
        <Main></Main>
      </WeatherProvider>
    </div>
  );
}

export default App;
