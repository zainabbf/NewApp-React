/* eslint-disable jsx-a11y/anchor-is-valid */
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Gallery from './pages/gallery';
import Text from './pages/linktext';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/linktext" element={<Text />} />
      </Routes>
    </div>
  );
}

export default App;
