import {Route, Routes} from 'react-router-dom'

import Quiz from './pages/quiz/quiz';
import Upload from './pages/uploadPage/upload'
import Games from './pages/games.js/games'
import Home from "./pages/Home";
import SignIn from './auth/sign-in/sigin-in';
import SignUp from './auth/sign-up/sign-up';
import Edit from './pages/editPage/edit';


function App() {

  
 
  return (
    <div className="App">
     
       

      <Routes>
      
    
      <Route path='/'
       element={ <Home type='greeting'
          title='Welcome'
 
        
      />}>
      </Route>

      <Route path='/games'
       element={<Games/>}>
      </Route>


      <Route path='/upload'
       element={ <Upload/>}>
      </Route>

      <Route path='/quiz'
       element={<Quiz/>}>
      </Route>

      <Route path='/edit'
       element={<Edit/>}>
      </Route>

      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
    </Routes>
  
    </div>
  );
}

export default App;

