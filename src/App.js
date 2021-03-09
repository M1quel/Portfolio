import './App.css';
import Homepage from './pages/Homepage/Homepage';
import { Router } from '@reach/router';
import PrimaryNavigation from './components/PrimaryNavigation/PrimaryNavigation';

function App() {
  return (
    <>
    <PrimaryNavigation/>
    <Router>
      <Homepage path="/"/>

    </Router>
    </>
  );
}

export default App;
