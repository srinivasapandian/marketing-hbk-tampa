import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToHash from './components/ScrollToHash';

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-[#1a130e]">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
