import moment from 'moment';
import { Note } from '../store/types';

moment.updateLocale('en', {
  week: {
    dow: 1,
  },
});

const WEEK_SIZE = 7;
const CALENDAR_ROWS_COUNT = 6;
const CALENDAR_FIELD = WEEK_SIZE * CALENDAR_ROWS_COUNT;
const HOURS_IN_DAY = 24;
export const DAY_ID_FORMAT = 'YYYYMMDD';

const getStartDate = (selectedMonth: moment.Moment) => {
  const dayOfWeek = selectedMonth.weekday() + 1;
  const shiftDays = dayOfWeek === 0 ? WEEK_SIZE - 1 : (dayOfWeek % WEEK_SIZE) - 1;

  return selectedMonth.subtract(shiftDays, 'day');
};

const fillDays = (selectedMonth: moment.Moment) => {
  const startDate = getStartDate(selectedMonth);
  const days = [];

  for (let i = 0; i < CALENDAR_FIELD; i += 1) {
    days.push(moment(startDate).add(i, 'days'));
  }

  return days;
};

export const getDaysForCalendar = (selectedMonth: moment.Moment): Date[] => {
  return fillDays(selectedMonth.clone()).map((day) => day.toDate());
};

export const getNoteId = (selectedDay: Date | null, time: string): string => {
  return `${moment(selectedDay).format(DAY_ID_FORMAT)}${time}`;
};

export const getNoteMessage = (notes: Note[], noteId: string): string => {
  return notes.find(({ id }) => id === noteId)?.message || '';
};

export const getTimeTemplate = (): string[] => {
  return [...new Array(HOURS_IN_DAY)].map((_el, index) => `${`${index}`.padStart(2, '0')}:00`);
};

export const getDetailedDayData = (notes: Note[], selectedDay: Date | null): Note[] => {
  const times = getTimeTemplate();

  if (!selectedDay) {
    return [];
  }

  const dayId = moment(selectedDay).format(DAY_ID_FORMAT);
  const notesForDay = notes.filter(({ id }) => id.includes(dayId));

  return times.map((time) => {
    const noteId = getNoteId(selectedDay, time);
    const note = notesForDay.find(({ id }) => id === noteId);

    if (note) {
      return note;
    }

    return { id: noteId, message: '' };
  });
};

export const addNote = (notes: Note[], note: Note): Note[] => {
  return [...notes.filter(({ id }) => id !== note.id), note];
};

export const getCountNotesForDay = (notes: Note[], date: Date): number => {
  const dayId = moment(date).format(DAY_ID_FORMAT);

  return notes.filter(({ id }) => id.includes(dayId)).length;
};

export const getNotesForPeriod = (notes: Note[], period: moment.Moment[]): Note[] => {
  return notes.filter(({ id }) => moment(id, DAY_ID_FORMAT).isBetween(period[0], period[1], 'day', '[]'));
};
