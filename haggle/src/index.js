import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './components/Timer';
// import Dummy from './components/Dummy';

const App = () => {
  return (
    <div className="App">
      <h1>Payment</h1>
      <Timer /> 
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
