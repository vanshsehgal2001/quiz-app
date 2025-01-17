import Home from './pages/Home';


import Login from './pages/Login';
import Register from './pages/Register';


import Quiz from './pages/Quiz';

import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Community from './pages/Community';

const App = () => {
  return (


    <Router>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/Quiz' element={<Quiz />} />
        <Route path='/Commnunity' element={<Community />} />
      </Routes>

    </Router>
  )
};

export default App;
