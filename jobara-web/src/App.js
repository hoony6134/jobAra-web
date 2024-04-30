import './App.css';
import Home from './Home';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Result from './Result';
import Detail from './Detail';
import { BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom';
import RouteChangeTracker from './RouteChangeTracker';

function App() {
  return (
    <BrowserRouter>
    <RouteChangeTracker/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/result" element={<Result />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
