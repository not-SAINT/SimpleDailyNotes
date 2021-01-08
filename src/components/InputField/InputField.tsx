import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { AppState } from '../../store/types';

import { addNote, deleteNote, toogleNote } from '../../store/actions';
import style from './InputField.module.scss';

const { TextArea } = Input;
const { Title } = Typography;

const InputField = (): React.ReactElement => {
  const pickedNote = useSelector(({ selectedNote }: AppState) => selectedNote);
  const [noteMessage, setNoteMessage] = useState(pickedNote?.message);
  const dispatch = useDispatch();

  useEffect(() => {
    setNoteMessage(pickedNote?.message);
  }, [pickedNote?.message]);

  const onSaveNoteClick = () => {
    if (pickedNote) {
      const newNote = { id: pickedNote?.id, message: noteMessage || '' };

      dispatch(addNote(newNote));
      setNoteMessage('');
      dispatch(toogleNote(null));
    }
  };

  const onDeleteNoteClick = () => {
    if (pickedNote) {
      dispatch(deleteNote(pickedNote));
    }

    dispatch(toogleNote(null));
  };

  const onChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteMessage(event.target.value);
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <Title className={style.header} level={4}>
          {pickedNote?.id.slice(-5)}
        </Title>
      </div>
      <div>
        <TextArea
          className={style.input}
          showCount
          maxLength={250}
          placeholder="Write your note here..."
          autoSize={{ minRows: 5, maxRows: 10 }}
          defaultValue={noteMessage}
          value={noteMessage}
          onChange={onChangeTextArea}
        />
      </div>
      <div className={style.block}>
        <Button className={style.button} onClick={onSaveNoteClick}>
          Save note
        </Button>
        <Button className={style.button} shape="circle" onClick={onDeleteNoteClick} icon={<DeleteOutlined />} />
      </div>
    </div>
  );
};

export default InputField;
