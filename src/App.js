import logo from './logo.svg';
import './App.css';
import ListUser from './axios/ListUser';
// import Components from './views/Components'
// import Components2 from './views/Components2'
// import Todolist from './todolist/Todolist'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>Simple TodoApp</p> */}
        <br />
        {/* <Components /> */}
        {/* <Components2 /> */}
        {/* <Todolist /> */}
        <ListUser />
      </header>
    </div>
  );
}

export default App;
