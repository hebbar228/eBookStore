// import logo from './logo.svg';
// import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer } from './components';

function App() {
  return (
    <div className="App dark:bg-slate-800">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
