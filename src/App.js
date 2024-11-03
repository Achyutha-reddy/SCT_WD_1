import './App.css';
import { BrowserRouter, Link } from 'react-router-dom'
import Nav from './components/Nav/Nav';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    </BrowserRouter>
  );
}

export default App;
