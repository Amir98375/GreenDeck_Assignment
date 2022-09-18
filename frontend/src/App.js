import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './component/AllRoutes';
import { Signup } from './component/Signup';
import { Login } from './component/Login';
import { Navbar } from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
<AllRoutes/>

    </div>
  );
}

export default App;
