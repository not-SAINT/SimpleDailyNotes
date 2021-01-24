import { useSelector } from 'react-redux';

import { AppState } from './store/types';
import Calendar from './components/Calendar/Calendar';
import Navigation from './components/Navigation/Navigation';
import DetailedDay from './components/DetailedDay/DetailedDay';
import InputField from './components/InputField/InputField';
import NotesList from './components/NotesList/NotesList';
import style from './App.module.scss';

const App = (): React.ReactElement => {
  const state = useSelector(({ selectedDay, selectedNote, selectedPeriod }: AppState) => {
    return { selectedDay, selectedNote, selectedPeriod };
  });

  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1>Simple Daily Notes</h1>
        <Navigation />
      </header>
      <main>
        <Calendar />
        {!state.selectedPeriod && state.selectedDay && (
          <div className={style.details}>
            <DetailedDay />
            {state.selectedNote && <InputField />}
          </div>
        )}
        {state.selectedPeriod && <NotesList period={state.selectedPeriod} />}
      </main>
    </div>
  );
};

export default App;
