import { BrowserRouter,Routes,Route} from "react-router-dom";
import Login  from "./screens/login";
import Home from "./screens/home";


function App() {
  return (
    <BrowserRouter>
     <div className="App">
    <Routes>
    < Route path ='/login' element={ <Login />}/>
    < Route path ='/' element={ <Home />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
