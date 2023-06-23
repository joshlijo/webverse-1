import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import StudentLogin from './Student/StudentLogin';

function App() {
  return (
    <div className="App.js">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<StudentLogin />} />
      </Routes>
    </div>
  );
}

export default App;
