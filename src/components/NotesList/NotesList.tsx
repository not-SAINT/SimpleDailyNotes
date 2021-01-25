import { useSelector } from 'react-redux';
import { Typography, List } from 'antd';
import moment from 'moment';

import { AppState } from '../../store/types';
import { getNotesForPeriod, DAY_ID_FORMAT } from '../../utils/utils';
import style from './NotesList.module.scss';

const { Title, Text } = Typography;
const DATE_FORMAT = 'D MMM YYYY';

type Props = {
  period: moment.Moment[];
};

const NotesList = ({ period }: Props): React.ReactElement => {
  const state = useSelector(({ selectedDay, selectedNote, notes }: AppState) => {
    return { selectedDay, selectedNote, notes };
  });
  const data = getNotesForPeriod(state.notes, period);

  return (
    <div className={style.container}>
      <Title className={style.header} level={4}>
        {`${moment(period[0]).format(DATE_FORMAT)} - ${moment(period[1]).format(DATE_FORMAT)}`}
      </Title>
      <div className={style.list}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <Text strong>{`${moment(item.id, DAY_ID_FORMAT).format(DATE_FORMAT)} - ${item.id.slice(-5)}`}</Text>
                }
                description={item.message}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default NotesList;
