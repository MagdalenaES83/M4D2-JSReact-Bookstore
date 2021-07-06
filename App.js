import './App.css';
import MyJumbo from './components/MyJumbo';
import MyNavBar from './components/MyNavBar';
import MyFooter from './components/MyFooter';
import Home from './components/Home';

function App() {
  return (
    <div>
      <div><MyNavBar title="Hello Bookstore!" /> </div>
      <div><MyJumbo title="Welcome" /></div>
      <div><Home /></div>
      <div><MyFooter /></div>
        
    </div>
    

  );
}

export default App;
