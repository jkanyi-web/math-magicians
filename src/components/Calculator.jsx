/** @format */

import { useState } from 'react';
import calculate from '../logic/calculate.js';

export default function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const buttonClick = (e) => {
    setState(calculate(state, e.target.textContent));
  };

  return (
<<<<<<< HEAD
    <section className='container'>
      <input
        type='text'
        className='input'
        value={state.next || state.total || '0'}
      />
      <div className='itemsContainer'>
        <button type='button' onClick={buttonClick} className='items'>
          AC
        </button>
        <button type='button' onClick={buttonClick} className='items'>
          +/-
        </button>
        <button type='button' onClick={buttonClick} className='items'>
          %
        </button>
        <button type='button' onClick={buttonClick} className='items orange'>
          ÷
        </button>
        <button type='button' onClick={buttonClick} className='items'>
          7
        </button>
        <button type='button' onClick={buttonClick} className='items'>
          8
        </button>
        <button type='button' onClick={buttonClick} className='items'>
          9
        </button>
        <button type='button' onClick={buttonClick} className='items orange'>
          x
        </button>
        <button type='button' onClick={buttonClick} className='items'>
          4
        </button>
        <button type='button' onClick={buttonClick} className='items'>
          5
        </button>
        <button type='button' onClick={buttonClick} className='items'>
          6
        </button>
        <button type='button' onClick={buttonClick} className='items orange'>
          -
        </button>
        <button type='button' onClick={buttonClick} className='items'>
          1
        </button>
        <button type='button' onClick={buttonClick} className='items'>
          2
        </button>
        <button type='button' onClick={buttonClick} className='items'>
          3
        </button>
        <button type='button' onClick={buttonClick} className='items orange'>
          +
        </button>
        <button type='button' onClick={buttonClick} className='items long'>
          0
        </button>
        <button type='button' onClick={buttonClick} className='items'>
          .
        </button>
        <button type='button' onClick={buttonClick} className='items orange'>
          =
        </button>
=======
    <>
      <div className='container'>
        <input type='text' name='calc' className='input' />
        <div className='itemsContainer'>
          <button className='items'>AC</button>
          <button className='items'>+/-</button>
          <button className='items'>%</button>
          <button className='items orange'>/</button>
          <button className='items'>7</button>
          <button className='items'>8</button>
          <button className='items'>9</button>
          <button className='items orange'>x</button>
          <button className='items'>4</button>
          <button className='items'>5</button>
          <button className='items'>6</button>
          <button className='items orange'>-</button>
          <button className='items'>1</button>
          <button className='items'>2</button>
          <button className='items'>3</button>
          <button className='items orange'>+</button>
          <button className='items long'>0</button>
          <button className='items'>.</button>
          <button className='items orange'>=</button>
        </div>
>>>>>>> 16b2ea8b9f0734bb2a093409a7dc00d2361e6b86
      </div>
    </section>
  );
}
