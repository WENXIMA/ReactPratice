import {Routes,Route} from 'react-router-dom';

import Home from './Home/home';
import Navigation from './Navigation/Navigation';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
    <Route index element={<Home />} />
    </Route>
    </Routes>
      
  );
}

export default App;
