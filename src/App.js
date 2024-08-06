
import { Outlet } from 'react-router';
import './App.css';
import Header from './components/Header';




function App() {
  <Header/>
  return (
    <div className="App" style={{backgroundColor:"white"}}>
  
    <Outlet/>
 
    </div>
  );
}

export default App;
