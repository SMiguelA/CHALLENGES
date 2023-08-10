import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/:id' element={ <ProductDetail /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
