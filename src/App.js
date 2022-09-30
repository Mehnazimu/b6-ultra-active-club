import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Question from './Components/Question/Question';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Home></Home>

     <Question></Question>
    </div>
  );
}

export default App;
