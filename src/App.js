import './App.css';
import imageDisplay from './components/ImageDisplay';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'react-image-lightbox/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={imageDisplay} />
      </div>
    </Router>
  );
}

export default App;
