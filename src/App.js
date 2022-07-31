
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from'./components/pages/Home';
import View from './components/student/View';
import Edit from './components/student/Edit';

function App() {
  return (
   <>
   
   <Router>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/view/:id" element={<View/>}/>
      <Route exact path="/edit/:id" element={<Edit/>}/>

     
    </Routes>
   </Router>
    {/* <Home/> 
    <View/>
   <Edit/>  */}
   
  
   </>
  );
}

export default App;
