import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollProvider } from './ScrollContext';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { FAB } from './components/FAB';
import './index.css';

function App() {
  return (
    <ScrollProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <FAB />
      </BrowserRouter>
    </ScrollProvider>
  );
}

export default App;
