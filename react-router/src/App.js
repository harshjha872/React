import { Route, Redirect, Link } from 'react-router-dom';
import FirstPage from './Pages/Page1';
import SecondPage from './Pages/Page2';
import Params from './Pages/Params';
//changes
function App() {
  return (
    <div>
      <Link to='/first'>First</Link>
      <Link to='/Second'>Second</Link>
      <Route path='/' exact>
        <Redirect to='/first' />
      </Route>
      <Route path='/first'>
        <FirstPage />
      </Route>
      <Route path='/second'>
        <SecondPage />
      </Route>
      {/* 
      wrapping all routes with Switch will display only first route matching the requirement like here it would display only SecondPage component because it is matched first is order
      <Route path='/second/second'>
        <h1>Hello this is second route</h1>
      </Route> */}
      <Route path='/param/:paramsId'>
        <Params />
      </Route>
    </div>
  );
}

export default App;
