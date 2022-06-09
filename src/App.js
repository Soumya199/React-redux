import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router} from 'react-router-dom';
import Shop from './components/Shop';

function App() {
  return (
    <Router>
      <NavBar/>
      <Shop/>
    </Router>
  );
}

export default App;
