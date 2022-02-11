import './App.css';
import { List } from './components/generics/List';

function App() {
  return (
    <div className="App">
      {/* <List 
        items={['Seun', 'Seyi', 'Hannah']}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List 
        items={[
          {
            id: 1,
            first: 'Seun',
            last: 'Taiwo'
          },
          {
            id: 2,
            first: 'Seyi',
            last: 'Taiwo'
          },
          {
            id: 3,
            first: 'Hannah',
            last: 'Taiwo'
          }
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
