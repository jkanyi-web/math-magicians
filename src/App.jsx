/** @format */
import './index.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CalculatorPage from './CalculatorPage';
import Quotes from './components/Quotes';

export default function App() {
    const headerStyle = {
      fontSize: '2rem',
      textAlign: 'left',
      position: 'absolute',
      top: '-15px',
      left: '10px',

    };

  return (
    <>
      <h1 style={headerStyle}>Math Magicians</h1>

      <nav>
        <ul>
          <li>
            <Link className='link' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='link' to='/calculator'>
              Calculator
            </Link>
          </li>
          <li>
            <Link className='link third' to='/quotes'>
              Quotes
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/calculator' element={<CalculatorPage />} />
        <Route path='/quotes' element={<Quotes />} />
      </Routes>
    </>
  );
}
