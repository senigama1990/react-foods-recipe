import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div className="App">
      <Header />
      <main className='container content'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contacts' component={Contact} />
          <Route component={NotFound}/>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
