import logo from './logo.svg';
import './App.css';

const Person = (props) => {
  return(
    <>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
    </>
  );
  
}

const App = () => {
  const name = 'John';
  return (
    <div className="App">
      <Person name = {"John"} age = {30}/>
      <Person name = {"Ann"} age = {35}/>
    </div>
  );
}

export default App;
