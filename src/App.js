import logo from './logo.svg';
import './App.css';

function App() { 
  const name = 'Hello World';
  const obj  = { message: "Welcome to expertizo" };
  const data = ['We', 'Are', 'United']; //Show these in separate tags
  const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}]; //Show these in separate tags
  const complex = [
    {
      company: 'XYZ',
      jobs: ['JavaScript', 'React']
    },
    {
      company: 'ABC',
      jobs: ['Angular', 'Ionic']
    }
  ]; //Show these in a Table
  return (
    <div>
      <p><b>Task 1:</b> {name}</p>
      <p><b>Task 2:</b> {obj.message}</p>
      <p><b>Task 3:</b></p>
      <ol>
        { data.map((item)=>{ return <li>{item}</li> }) }
      </ol>
      <p><b>Task 4:</b></p>
      <ol>
        { list.map((item)=>{ return <li>{item.name}</li> }) }
      </ol>
      <p><b>Task 5:</b></p>
      <table>
        <thead>
          <th>Company Name</th>
          <th>Technologies</th>
        </thead>
        <tbody>
          {
            complex.map((item)=>{
              return <>
                <tr>
                  <td style={{textAlign: "center"}}>{item.company}</td>
                  <td>{item.jobs.map((item)=>{return item + ' '})}</td>
                </tr> 
              </>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;