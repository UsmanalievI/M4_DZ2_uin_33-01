import './App.css';
import List from './components/list/List';


function App() {
  const tasks=[ {
      id:1 ,
      title: 'coding',
      completed: false
    },
    {
      id:2,
      title: 'eat',
      completed: false
    },
    {
      id:3,
      title: 'sleep',
      completed: true
    }
    ]
  return (
    <>
      <List tasks={tasks}/>
    </>
  );
}

export default App;
