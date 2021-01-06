import Calendar from './components/Calendar/Calendar';
import Navigation from './components/Navigation/Navigation';
import './App.css';

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <header className="header">
        <h1>Simple Daily Notes</h1>
        <Navigation />
      </header>
      <main>
        <Calendar />
      </main>
    </div>
  );
};

export default App;
