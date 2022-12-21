import {Routes,Route} from 'react-router-dom';

import Home from './component/Home/home';
import Navigation from './component/Navigation/Navigation';
import LogIn from './auth/auth';
import Shop from './component/Shop/Shop.jsx';
import CheckOut from './component/Shop/CheckOut/check-out.component'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
    <Route index element={<Home />} />
    <Route path='/shop/*' element={<Shop />} />
    <Route path='/login' element={<LogIn />} />
    <Route path='/checkout' element={<CheckOut />} />

    </Route>
    </Routes>
      
  );
}

export default App;
