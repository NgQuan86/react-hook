import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';

function App() {

  let title = 'React Hook';
  let obj = { name: 'Ng', number: 20 };
  let link = 'http://www.google.com';


  return (
    <div className="App">
      <Nav />


      {console.log('check object', obj)}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world  with {title}</h1>
        <a href={link} target="_blank" >visit my site</a>

      </header>
    </div>
  );
}

export default App;
