import './App.css';

function App() {
  return (
    <div className="App">
      <div className='calculator'>
      <h1>Calculator</h1>
        <div className='result'>
          0
        </div>

        <div className='row'>
          <button className='reset'>AC</button>
          <button className='changeSymbol'>+/-</button>
          <button className='percentage'>%</button>
          <button className='division'>/</button>
        </div>

        <div className='row'>
          <button className='number'>7</button>
          <button className='number'>8</button>
          <button className='number'>9</button>
          <button className='multiplication'>X</button>
        </div>

        <div className='row'>
          <button className='number'>4</button>
          <button className='number'>5</button>
          <button className='number'>6</button>
          <button className='minus'>-</button>
        </div>

        <div className='row'>
          <button className='number'>1</button>
          <button className='number'>2</button>
          <button className='number'>3</button>
          <button className='sum'>+</button>
        </div>

        <div className='row'>
          <button className='number0'>0</button>
          <button className='coma'>,</button>
          <button className='equal'>=</button>
        </div>
      </div>
        
    </div>
  );
}

export default App;
