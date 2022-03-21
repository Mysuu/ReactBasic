import logo from './logo.svg';
import './App.css';
// import Components from './views/Components'
import Components2 from './views/Components2'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        {/* <Components /> */}
        <Components2 />
      </header>
    </div>
  );
}

export default App;
