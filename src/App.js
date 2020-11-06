import './App.css';
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <Route exact path="/" component={Dashboard} />
        </div>
      </div>
    </Router>
  );
}

export default App;
