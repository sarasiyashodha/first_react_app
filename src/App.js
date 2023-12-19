import logo from './logo.svg';
import './App.css';

const Person = () => {
  return(
    <>
      <h1>Name: John</h1>
      <h2>Age: 30</h2>
    </>
  );
  
}

const App = () => {
  const name = 'John';
  return (
    <div className="App">
      
      <Person />
    </div>
  );
}

export default App;
