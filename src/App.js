import logo from './logo.svg';
import './App.css';

function App() { 
  const name = 'Hello World';
  const obj  = { message: "Welcome to expertizo" };
  const data = ['We', 'are', 'United']; //Show these in separate tags
  const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}]; //Show these in separate tags
  const complex = [ {company: 'XYZ', jobs: ['JavaScript', 'React']}, {company: 'ABC', jobs: ['Angular', 'Ionic']}]; //Show these in a Table
  return (
    <div>
      <p><b>Task 1:</b> {name}</p>
      <p><b>Task 2:</b> {obj.message}</p>
      <p><b>Task 3:</b></p>
      <ul>
      {
      data.forEach(element => {
        <li>{element}</li>;
      })
      }
      </ul>
    </div>
  );
}

export default App;
