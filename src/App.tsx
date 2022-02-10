import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: 'Seun',
    last: 'Taiwo'
  }

  const nameList = [
    {
      first: 'Seun',
      last: 'Taiwo'
    },
    {
      first: 'Seyi',
      last: 'Taiwo'
    },
    {
      first: 'Hannah',
      last: 'Taiwo'
    }
  ]

  return (
    <div className="App">
      <Greet name="Seun" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
