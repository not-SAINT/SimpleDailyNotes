import moment from 'moment';

const WEEK_SIZE = 7;
const CALENDAR_ROWS_COUNT = 6;
const CALENDAR_FIELD = WEEK_SIZE * CALENDAR_ROWS_COUNT;

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

const getDaysForCalendar = (selectedPeriod: moment.Moment): Date[] => {
  return fillDays(selectedPeriod.clone()).map((day) => day.toDate());
};

export default getDaysForCalendar;
