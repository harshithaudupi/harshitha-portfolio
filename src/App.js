import './App.css';
import Home from './Navigation/Home';
// import Interests from './Navigation/Interests';
import Contact from './Navigation/Contact';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';

function App() {
 
  
  

  return(
    
    <div className='App'>
    <BrowserRouter basename='/harshitha-portfolio'>
                   <Routes>
                      <Route exact path='/' index element={<Home/>}/>
                      <Route exact path='/contact' element={<Contact/>}/>
                   </Routes>
    </BrowserRouter>
    </div>

    
  ) 
  
}

export default App;
