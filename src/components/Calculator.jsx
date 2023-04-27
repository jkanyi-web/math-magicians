/** @format */

export default function Calculator() {
  return (
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
      </div>
    </>
  );
}
