import './App.css';
import Header from './component/Header';
import Todolist from './component/Todolist';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <Todolist/>
    </div>
  );
}

export default App;
