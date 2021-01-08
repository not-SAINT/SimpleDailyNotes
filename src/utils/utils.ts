import moment from 'moment';
import { Note } from '../store/types';

const WEEK_SIZE = 7;
const CALENDAR_ROWS_COUNT = 6;
const CALENDAR_FIELD = WEEK_SIZE * CALENDAR_ROWS_COUNT;
const HOURS_IN_DAY = 24;
const DAY_ID_FORMAT = 'YYYYMMDD';

const getStartDate = (selectedPeriod: moment.Moment) => {
  const dayOfWeek = selectedPeriod.weekday();
  const shiftDays = dayOfWeek === 0 ? WEEK_SIZE - 1 : (dayOfWeek % WEEK_SIZE) - 1;

  return selectedPeriod.subtract(shiftDays, 'day');
};

const fillDays = (selectedPeriod: moment.Moment) => {
  const startDate = getStartDate(selectedPeriod);
  const days = [];

  for (let i = 0; i < CALENDAR_FIELD; i += 1) {
    days.push(moment(startDate).add(i, 'days'));
  }

  return days;
};

export const getDaysForCalendar = (selectedPeriod: moment.Moment): Date[] => {
  return fillDays(selectedPeriod.clone()).map((day) => day.toDate());
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
