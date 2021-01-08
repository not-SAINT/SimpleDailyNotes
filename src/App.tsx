import { useSelector } from 'react-redux';

import { AppState } from './store/types';
import Calendar from './components/Calendar/Calendar';
import Navigation from './components/Navigation/Navigation';
import DetailedDay from './components/DetailedDay/DetailedDay';
import InputField from './components/InputField/InputField';
import style from './App.module.scss';

const App = (): React.ReactElement => {
  const pickedDay = useSelector(({ selectedDay }: AppState) => selectedDay);
  const pickedNote = useSelector(({ selectedNote }: AppState) => selectedNote);

  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1>Simple Daily Notes</h1>
        <Navigation />
      </header>
      <main>
        <Calendar />
        {pickedDay && (
          <div className={style.details}>
            <DetailedDay />
            {pickedNote && <InputField />}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
