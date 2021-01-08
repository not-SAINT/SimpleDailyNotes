import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, List } from 'antd';
import moment from 'moment';

import { AppState, Note } from '../../store/types';
import { toogleNote } from '../../store/actions';
import { getDetailedDayData, getNoteId, getNoteMessage } from '../../utils/utils';
import style from './DetailedDay.module.scss';

const { Title, Text } = Typography;

const DetailedDay = (): React.ReactElement => {
  const state = useSelector(({ selectedDay, selectedNote, notes }: AppState) => {
    return { selectedDay, selectedNote, notes };
  });
  const data = useMemo(() => {
    return getDetailedDayData(state.notes, state.selectedDay);
  }, [state.notes, state.selectedDay]);
  const dispatch = useDispatch();

  const onTimeClick = (id: string) => {
    const noteId = getNoteId(state.selectedDay, id.slice(-5));
    const noteMessage = getNoteMessage(state.notes, noteId);

    if (state.selectedNote?.id === noteId) {
      return dispatch(toogleNote(null));
    }

    const newNote = {
      id: noteId,
      message: noteMessage,
    } as Note;

    return dispatch(toogleNote(newNote));
  };

  return (
    <div className={style.container}>
      <Title className={style.header} level={4}>
        {moment(state.selectedDay).format('ddd -  D MMMM YYYY')}
      </Title>
      <div className={style.list}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              className={item.id === state.selectedNote?.id ? style.selected : style.unselected}
              onClick={() => {
                onTimeClick(item.id);
              }}
            >
              <List.Item.Meta title={<Text strong>{item.id.slice(-5)}</Text>} description={item.message} />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default DetailedDay;
